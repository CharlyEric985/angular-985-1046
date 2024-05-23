import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { RenduDirective } from '../shared/rendu.directive';
import { Assignment } from './assignment.model';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AssignmentsService } from '../shared/assignments.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-assignments',
  standalone: true,
  providers: [],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css',
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatListModule,
    RenduDirective,
    AssignmentDetailComponent,
    AddAssignmentComponent,
  ],
})
export class AssignmentsComponent implements OnInit {
  titre = 'Liste des assignments';

  // tableau des assignments POUR AFFICHAGE
  assignments: Assignment[] = [];

  // ici on injecte le service
  constructor(private assignmentsService: AssignmentsService) {}

  getColor(a: any) {
    return a.rendu ? 'green' : 'red';
  }

  ngOnInit() {
    console.log('ngOnInit assignments, appelée AVANT affichage du composant');
    this.getAssignmentsFromService();
  }

  getAssignmentsFromService() {
    // on récupère les assignments depuis le service
    this.assignmentsService.getAssignments()
    .subscribe((assignments) => {
      // les données arrivent ici au bout d'un certain temps
      console.log('Données arrivées');
      this.assignments = assignments;
    });
    console.log('Requête envoyée');
  }
}
