import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent } from './login.component';
import { PageNotFoundComponent } from './page-not-found.component';
// routes
const appRoutes: Routes = [
    { path: '', redirectTo: 'pokemon/all', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path : '**', component: PageNotFoundComponent }
];
  
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }