import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CreationService {

  constructor(private http: HttpClient) { }
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  //HttpMethods

  createtoken(params){
    return this.http.post(environment.apiBaseUrl+'/token',params);
  }



}
