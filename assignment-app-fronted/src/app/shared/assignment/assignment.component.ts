import { Component,Input } from '@angular/core';
import { AssignmentsService } from '../../assignment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignment',
  standalone: true,
  imports: [],
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})
export class AssignmentComponent {
  @Input() id: any;
  data:any;
  constructor(private assignmentService:AssignmentsService,private route:ActivatedRoute,private router:Router) { }
  ngOnInit() {
    this.assignmentService.getAssignment(this.id)
  .subscribe((assignment: any) => {
    this.data = assignment.data;

    console.log(assignment)
    console.log(this.data)
  });
  
  }
}
