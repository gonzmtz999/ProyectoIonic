import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAPIService {

  constructor(private firebaseApi: AngularFireDatabase) { }

  public createClient(flete : any): Promise<any>{
    return this.firebaseApi.database.ref('fletes').push(flete);
    }

    public readQoute(): Observable<any>{
      return this.firebaseApi.list('fletes').valueChanges();
    }

}