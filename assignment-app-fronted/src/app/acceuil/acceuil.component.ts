import { Component } from '@angular/core';
import { AssignmentComponent } from '../shared/assignment/assignment.component';
import { AssignmentsService } from '../assignment.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Assignment } from '../shared/assignment/assignment.model';


@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [AssignmentComponent],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent {
  assignments!: Assignment[]|undefined;
  prev:any;
  next:any;
  page:any;
  limit:any;
  constructor(private assignmentService:AssignmentsService,private route:ActivatedRoute,private router:Router) { }
    ngOnInit() {
      this.assignmentService.getAssignments()
    .subscribe((assignment: any) => {
      this.assignments = assignment.data.docs;
      this.next=assignment.data.hasNextPage;
      this.prev=assignment.data.hasPrevPage;
      this.limit=assignment.data.limit;
      this.page=assignment.data.page;
      console.log(assignment)
      console.log(this.assignments)
    });
    
    }
}
