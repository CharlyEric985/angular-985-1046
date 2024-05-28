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
import { response } from 'express';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-assignment',
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList,MatIcon, CdkDrag, SidenavComponent, NavbarComponent,MatSidenavModule,MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule],
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
  const limit:number=5;
  const page: number=1;
    this.assignmentService.getAssignmentsRendu(limit,page,true).subscribe((assignment: any) => {
      this.done = assignment.data.docs;
      // this.totalPages = matiere.data.totalPages;
      // this.currentPage = page;
      // this.generatePageNumbers();
      // this.isLoading = false;
    });
    this.assignmentService.getAssignmentsRendu(limit,page,false).subscribe((assignment: any) => {
      this.todo = assignment.data.docs;
      // this.totalPages = matiere.data.totalPages;
      // this.currentPage = page;
      // this.generatePageNumbers();
      // this.isLoading = false;
    });
    
  }
  drop(event: CdkDragDrop<Assignment[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      // datainstance.rendu=false
      
    } else {
      console.log(event.currentIndex)
      let datainstance=event.previousContainer.data[event.previousIndex]
      console.log(event.container.data)
      console.log(datainstance.rendu)
      console.log(datainstance)

      // console.log(this.dialog)
      // event.container.data[event.currentIndex].rendue=true
      if(datainstance.rendu===false)
      {
        const dialoginstance=this.dialog.open(DialogElementsExampleDialogComponent,{
          data:datainstance,
          disableClose: true,  // Empêche la fermeture en cliquant en dehors ou avec la touche Escape
          hasBackdrop: true    // Affiche le fond noir
        });
        console.log(datainstance)
        dialoginstance.afterClosed().subscribe((result: Assignment) => {
          console.log('The dialog was closed');
          console.log(result);
          datainstance = result;
            if(datainstance.note!==undefined){
              transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
              );
              console.log("ghghghghghghh", datainstance)
              this.assignmentService.updateAssignment(datainstance).subscribe((response:any)=> {
                console.log(response.data)
              }

              )
            }
          }
        // console.log(datainstance)
      );
      }
      // console.log(datainstance)


    }
  }
}
