import { Component, OnInit } from '@angular/core';
import { FirebaseAPIService } from '../firebase-api.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Flete } from '../flete';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  ngOnInit() {
  }

  // tslint:disable-next-line: member-ordering
  data: any = {};
  valor ='';
  fletes: Flete[]=[];


  constructor(private firebaseAPI: FirebaseAPIService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public toastController: ToastController) { 
      this.firebaseAPI.readQoute().
      subscribe((res)=> {
        this.fletes=res;
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


  async presentAlert():Promise<any> {
    const alert = await this.alertController.create({
      header: '¡Listo!',
      subHeader: 'Usuario '+ this.data.usuario + ' Creado con exito',
      buttons: ['Enterado']
    });

    await alert.present();
  }
  

  onSubmit(){
    alert(JSON.stringify(this.data));
   }


   public createClient(){
     
    //this.firebaseAPI.createCLient(this.data). 
    this.firebaseAPI.createClient(this.data).
     then(()=>{
       console.log('Usuario creado');
     },
     (err)=>{
       console.log(err);
     });
   }

}
