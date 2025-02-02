import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  loginService(loginData: any) {
    return this.http.post('https://projectapi.gerasim.in/api/UserApp/login', loginData);
  }
}
