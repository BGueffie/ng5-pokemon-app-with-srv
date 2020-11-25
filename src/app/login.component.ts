import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from './models/user';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    user : User= { username: '', password: ''};
    errorFromServer : string;

    constructor(private loginService: LoginService, private router: Router, private titleService : Title) { }

    ngOnInit() {
        this.titleService.setTitle('Login');
     }

    login() {
        this.loginService
          .login(this.user)
          .subscribe(data => this.handleSuccess(data), error => this.handleError(error));
        }
          
    handleSuccess(data: User) {
        this.loginService.dispatchUserCreated(data._id);
        this.router.navigate(['/pokemon/all']);
    }
    
    handleError(error: any) {
        this.errorFromServer = `Error ${error.status} - Wrong Password or Username`;
    }
}