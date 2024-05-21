import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { authGuard } from './guard/auth.guard';
import { authCommunGuard } from './guard/auth-commun.guard';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FormComponent } from './etudiant/form/form.component';
import { MatiereComponent } from './matiere/matiere.component';
import { FormMatiereComponent } from './matiere/form-matiere/form-matiere.component';
import { DetailEtudiantComponent } from './etudiant/detail-etudiant/detail-etudiant.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: LoginComponent},
    { path: 'acceuil', component: AcceuilComponent, canActivate: [authCommunGuard] },
    //{ path: 'acceuil', component: AcceuilComponent}

    //Etudiant
    {path: 'etudiant', component: EtudiantComponent, canActivate: [authCommunGuard]},
    {path: 'etudiant/form', component: FormComponent,  canActivate: [authCommunGuard]},
    {path: 'etudiant/detail/:id', component: FormComponent,  canActivate: [authCommunGuard]},
    {path: 'etudiant/detail-etudiant/:id', component: DetailEtudiantComponent,  canActivate: [authCommunGuard]},

    //Matiere
    {path: 'matiere', component: MatiereComponent, canActivate : [authCommunGuard]},
    {path: 'matiere/ajout', component : FormMatiereComponent, canActivate : [authCommunGuard]},
    {path: 'matiere/detail/:id', component : FormMatiereComponent, canActivate : [authCommunGuard]}
    
    
];
