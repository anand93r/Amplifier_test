import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  constructor(private http:HttpClient) { }

  signUp(item:any){

    return this.http.post<any>('http://localhost:3000/signup', { item });
  }
}
