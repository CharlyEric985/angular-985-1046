import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-detail-assignment',
  standalone: true,
  imports: [NavbarComponent,SidenavComponent,MatSidenavModule,MatCardModule],
  templateUrl: './detail-assignment.component.html',
  styleUrl: './detail-assignment.component.css'
})
export class DetailAssignmentComponent {
  imageUrl: string = '../../../assets/img/avatar.jpg';
}
