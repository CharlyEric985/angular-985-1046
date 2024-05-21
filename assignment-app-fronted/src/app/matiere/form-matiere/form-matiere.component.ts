import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

interface Prof {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-form-matiere',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [NavbarComponent,SidenavComponent,MatSidenavModule,MatInputModule,
    MatFormFieldModule,MatDatepickerModule,MatIconModule,MatSelectModule],
  templateUrl: './form-matiere.component.html',
  styleUrl: './form-matiere.component.css'
})
export class FormMatiereComponent {
  imageUrl: string = '../../../assets/img/avatar.jpg';
  imageUrlM : string = '../../../assets/img/photo1.jpg'
  profs: Prof[] = [
    {value: 'Richard ', viewValue: 'Grin'},
    {value: 'Michel', viewValue: 'Buffal'},
  ];
  
}
