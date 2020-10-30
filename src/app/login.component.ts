import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from './models/user';

@Component({
    selector: 'login-component',
    templateUrl: './app/login.component.html'
})

export class LoginComponent implements OnInit {
    user : User= { username: '', password: ''};

    constructor(private loginService: LoginService, private router: Router) { }

    ngOnInit() { }

    login() {
        console.log('user', this.user);
        this.loginService
          .login(this.user)
          .subscribe(data => this.handleSuccess(data), error => this.handleError(error));
        }
          
    handleSuccess(data: User) {
        console.log('logged in', data);
        this.router.navigate(['/pokemon/all']);
        
    }
    
    handleError(error: any) {
        console.error('NOT logged in', error);
    }
}