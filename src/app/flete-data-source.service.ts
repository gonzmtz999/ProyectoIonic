import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FleteDataSourceService {

  constructor(private http: HttpClient) { }

  getFletes(): any {
    return this.http.get('./assets/fletes.json');
  }
}
