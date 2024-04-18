import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Assignment } from './shared/assignment/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor(private http:HttpClient) { }

  uri = "http://localhost:3500/api/assignments";

  // retourne tous les assignments
  getAssignments():Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.uri);
  }

  getAssignmentsPagines(page:number, limit:number):Observable<any> {
    return this.http.get<Assignment[]>(this.uri + "?page=" + page + "&limit=" + limit);
  }

  // renvoie un assignment par son id, renvoie undefined si pas trouvé
  getAssignment(id:number):Observable<Assignment|undefined> {
    return this.http.get<Assignment>(this.uri + "/" + id)
    .pipe(
           catchError(this.handleError<any>('### catchError: getAssignments by id avec id=' + id))
    );
    //let a = this.assignments.find(a => a.id === id);
    //return of(a);
  }

  // Methode appelée par catchError, elle doit renvoyer
  // i, Observable<T> où T est le type de l'objet à renvoyer
  // (généricité de la méthode)

  private handleError<T>(operation: any, result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // pour afficher dans la console
      console.log(operation + ' a échoué ' + error.message);

      return of(result as T);
    }
 };

  // ajoute un assignment et retourne une confirmation
  addAssignment(assignment:Assignment):Observable<any> {
    //this.assignments.push(assignment);
    // this.logService.log(assignment.nom, "ajouté");
    //return of("Assignment ajouté avec succès");
    return this.http.post<Assignment>(this.uri, assignment);
  }

  updateAssignment(assignment:Assignment):Observable<any> {
   // l'assignment passé en paramètre est le même objet que dans le tableau
   // plus tard on verra comment faire avec une base de données
   // il faudra faire une requête HTTP pour envoyer l'objet modifié
    // this.logService.log(assignment.nom, "modifié");
    //return of("Assignment modifié avec succès");
    return this.http.put<Assignment>(this.uri, assignment);
  }

  deleteAssignment(assignment:Assignment):Observable<any> {
    // on va supprimer l'assignment dans le tableau
    //let pos = this.assignments.indexOf(assignment);
    //this.assignments.splice(pos, 1);
    // this.logService.log(assignment.nom, "supprimé");
    //return of("Assignment supprimé avec succès");
    return this.http.delete(this.uri + "/" + assignment._id);
  }



}
