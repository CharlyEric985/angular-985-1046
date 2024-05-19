import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Etudiant } from '../../Model/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {


  constructor(private http:HttpClient,  private authService: AuthService, private router: Router) { }

  uri = "http://localhost:3500/api/auteur";

  getsEtudiants(search: string,page: number, limit: number):Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}` // Use the token from AuthService
    });

    return this.http.get<Etudiant[]>(`${this.uri}?search=${search}&page=${page}&limit=${limit}`, { headers })
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {

          this.authService.logout();
          // Rediriger vers la page d'accueil en cas d'erreur 403 (token invalide ou expiré)
        }
        // Propager l'erreur au composant consommateur
        throw error;
      })
    );

  }
}
