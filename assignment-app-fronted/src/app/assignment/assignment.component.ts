import { Component,Input } from '@angular/core';
import { AssignmentsService } from '../assignment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignment } from './assignment.model';
import { NavbarComponent } from '../shared/navbar/navbar.component';
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
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DialogElementsExampleDialogComponent } from '../dialog-elements-example-dialog/dialog-elements-example-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  selector: 'app-assignment',
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag, SidenavComponent, NavbarComponent,MatSidenavModule,MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule],
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
      { titre: 'Assignment 1', rendu: true },
      { titre: 'Assignment 3', rendu: true },
    ];
    this.todo=[
      { titre: 'Assignment 2', rendu: false },
      { titre: 'Assignment 4', rendu: false }
    ]

  }
  drop(event: CdkDragDrop<Assignment[]>) {
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      // datainstance.rendu=false
      // console.log(datainstance)
    } else {
      
      let datainstance=event.container.data[event.currentIndex]
      console.log(event.container)
      
      // console.log(this.dialog)
      // event.container.data[event.currentIndex].rendue=true
      if(datainstance.rendu==true)
      {
        datainstance.rendu=false
        const dialoginstance=this.dialog.open(DialogElementsExampleDialogComponent,{
          data:datainstance,
          disableClose: true,  // Empêche la fermeture en cliquant en dehors ou avec la touche Escape
          hasBackdrop: true    // Affiche le fond noir
        });
        dialoginstance.afterClosed().subscribe((result: Assignment) => {
          console.log('The dialog was closed');
          datainstance = result;
          console.log(datainstance)
          if(datainstance.annuler=="1"){
            transferArrayItem(
              event.previousContainer.data,
              event.container.data,
              event.previousIndex,
              event.currentIndex,
            );
          }
          console.log(datainstance)
        });
      }else{
        datainstance.rendu=true
        this.dialog.open(DialogElementsExampleDialogComponent,{
          data:datainstance,
          disableClose: true,  // Empêche la fermeture en cliquant en dehors ou avec la touche Escape
          hasBackdrop: true    // Affiche le fond noir
        });
      }
      console.log(datainstance)
      
      
    }
  }
}
