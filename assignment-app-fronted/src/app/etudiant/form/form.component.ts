import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [NavbarComponent,SidenavComponent,MatSidenavModule,MatInputModule,MatFormFieldModule,MatDatepickerModule, MatIconModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  imageUrl: string = '../../../assets/img/avatar.jpg';

  triggerFileInputClick(): void {
    const fileInput = document.getElementById('fileInput') as HTMLElement;
    fileInput.click();
  }
  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

}
