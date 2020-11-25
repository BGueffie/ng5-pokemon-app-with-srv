import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from './models/user';

@Component({
    selector: 'register-component',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
    user : User = {username : '', password : ''};
    errorFromServer : string = '';

    constructor(private loginService: LoginService, private router: Router, private titleService : Title) { }

    ngOnInit() { 
        this.titleService.setTitle('Register');
    }

    register() {
        this.loginService.register(this.user)
                         .subscribe(data => this.handleSuccess(data), err => this.handleError(err));
    }

    handleSuccess(data : User) {
        this.loginService.dispatchUserCreated(data._id);
        this.router.navigate(['/pokemon/all']);
        
    }
    
    handleError(error: any) {
        this.errorFromServer = `Error ${error.status} - Wrong Password or Username`;
    }
}