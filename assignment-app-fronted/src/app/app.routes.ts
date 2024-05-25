import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { authGuard } from './guard/auth.guard';
import { authCommunGuard } from './guard/auth-commun.guard';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FormComponent } from './etudiant/form/form.component';
import { DetailComponent } from './etudiant/detail/detail.component';
import { AssignmentComponent } from './assignment/assignment.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: LoginComponent},
    { path: 'acceuil', component: AssignmentComponent, canActivate: [authCommunGuard] },
    //{ path: 'acceuil', component: AcceuilComponent}

    //Etudiant
    {path: 'etudiant', component: EtudiantComponent, canActivate: [authCommunGuard]},
    {path: 'etudiant/form', component: FormComponent,  canActivate: [authCommunGuard]},
    {path: 'etudiant/detail', component: DetailComponent,  canActivate: [authCommunGuard]},

];
