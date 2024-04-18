import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule,MatInputModule,MatButtonModule,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('guillaume.haisoa@gmail.com'),
    mdp: new FormControl('123456'),
  });
  error: string | null | undefined;

  constructor(private authService: AuthService,private router: Router) {} // Injectez le service AuthService

 
  submit() {
    const { email, mdp } = this.form.value;
    this.authService.login(email, mdp).subscribe(
      (response) => {
        // Connexion réussie
        this.router.navigateByUrl('/acceuil');
      },
      (error: string) => {
        // Gestion de l'erreur de connexion
        this.error = error;
      }
    );
  
  }
}
