import { Component, OnInit } from '@angular/core';
import { Encargo } from '../encargo';
import { FirebaseAPIService } from '../firebase-api.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-encargo',
  templateUrl: './encargo.page.html',
  styleUrls: ['./encargo.page.scss'],
})
export class EncargoPage implements OnInit {

  data: any = {};
  valor = '';
  encargos: Encargo[] = [];

  // tslint:disable-next-line: max-line-length
  constructor(private firebaseAPI: FirebaseAPIService, public alertController: AlertController, public loadingController: LoadingController, public toastController: ToastController) {
    this.firebaseAPI.readEncargo().
      subscribe((res) => {
        this.encargos = res;
      });
   }

   async presentToast() {

    const loading = await this.loadingController.create({
      message: 'Loading...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
}

async presentAlert(): Promise<any> {
  const alert = await this.alertController.create({
    header: '¡Listo!',
    subHeader: 'Encargo a ' + this.data.direccion + ' con exito',
    buttons: ['Aceptar']
  });

  await alert.present();
}

onSubmit() {
  alert(JSON.stringify(this.data));
 }

 public createEncargo() {
  this.firebaseAPI.createEncargo(this.data).
   then(() => {
     console.log('Encargo exitoso');
   },
   (err) => {
     console.log(err);
   });
 }

  ngOnInit() {
  }

}
