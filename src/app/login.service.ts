import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './models/user';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    
    public userCreated =  new Subject<string>();
    isAuthenticated = false;
    baseURL=environment.apiUrl + 'auth';
    constructor(public http: HttpClient) { }
    
    login(user: User) {
        this.isAuthenticated = true;
        return this.http.post<User>(`${this.baseURL}/login`,user);
    }
    
    logout() {
        this.isAuthenticated = false;
        return this.http.get(`${this.baseURL}/logout`);
    }

    register(user : User) {
        return this.http.post<User>(`${this.baseURL}/register`, user);
    }

    dispatchUserCreated(id: string) {
        this.userCreated.next(id);
      }
}