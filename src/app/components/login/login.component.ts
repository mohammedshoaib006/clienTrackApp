import { Component, OnInit } from '@angular/core';
import { Login } from '../../model/login.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginData: Login = {
    username: '',
    password: ''
  }

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
    
  }

  login(loginForm: any) {
    console.log(loginForm.value);
    this.authService.loginService(loginForm.value).subscribe((response) => {
      console.log(response);
    });
    
  }

}
