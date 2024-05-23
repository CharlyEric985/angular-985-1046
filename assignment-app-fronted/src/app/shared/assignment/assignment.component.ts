import { Component,Input } from '@angular/core';
import { AssignmentsService } from '../../assignment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignment } from './assignment.model';
import { NavbarComponent } from '../navbar/navbar.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-assignment',
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag, SidenavComponent, NavbarComponent,MatSidenavModule],
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})
export class AssignmentComponent {
  @Input() id: any;
  done:any;
  todo:any;
  constructor(public dialog: MatDialog,private assignmentService:AssignmentsService,private route:ActivatedRoute,private router:Router) { }
  ngOnInit() {
  //   this.assignmentService.getAssignment(this.id)
  // .subscribe((assignment: any) => {
  //   const datas = assignment.data;
  //   datas.forEach((dataList: any[]) => {
  //     // Séparer les données en deux groupes en fonction de `etat` par chatGpt
  //     this.done.push(...dataList.filter(item => item.etat === 0));
  //     this.done.push(...dataList.filter(item => item.etat === 1));
  //   });
  // });
    this.done=[
      { titre: 'Assignment 1', rendue: true },
      { titre: 'Assignment 3', rendue: true },
    ];
    this.todo=[
      { titre: 'Assignment 2', rendue: false },
      { titre: 'Assignment 4', rendue: false }
    ]

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log( event.container.data[event.currentIndex])
      
      let datainstance=JSON.parse(event.container.data[event.currentIndex])
      console.log(datainstance.rendue);
      console.log( datainstance)
      // datainstance.rendue=true
      
    }
  }
}
