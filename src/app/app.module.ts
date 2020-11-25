import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';

import { PokemonsModule } from './pokemons/pokemons.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { LoginService } from './login.service';
import { LoginComponent } from './login.component';
import { AddCookieInterceptor } from './add-cookie.interceptor';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: 
  [ BrowserModule,
    HttpClientModule,
    FormsModule,
    PokemonsModule,
    ReactiveFormsModule,
    AppRoutingModule ],
  
    declarations: 
  [ AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent ],
    
    providers: [ Title, LoginService,
                 { provide : HTTP_INTERCEPTORS, useClass: AddCookieInterceptor,multi: true}  ],
    
    bootstrap: [ AppComponent]
})
export class AppModule { }