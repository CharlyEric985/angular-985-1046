import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { authGuard } from './guard/auth.guard';
import { authCommunGuard } from './guard/auth-commun.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: LoginComponent},
    { path: 'acceuil', component: AcceuilComponent, canActivate: [authCommunGuard] },
    //{ path: 'acceuil', component: AcceuilComponent}
];
