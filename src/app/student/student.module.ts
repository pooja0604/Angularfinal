import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { NavbarComponent } from '../../navbar.component';
import { HomeComponent } from '../home.component';
import { ButtonModule } from 'primeng/button';

import { StudentPageComponent } from './student-page.component';
import { StudentFormComponent } from './student-form.component';
import { StudentListComponent } from './student-list.component';
import { STUDENT_ROUTING } from './student.routing';
import { StudentService } from '../services/student.service';

@NgModule({
  imports: [
    CommonModule,
    STUDENT_ROUTING,
    TableModule,
    FormsModule,
    HttpClientModule

  ],
  declarations: [
    StudentPageComponent, 
    StudentFormComponent,
    StudentListComponent
  ],
  providers:[StudentService]  
})
export class StudentModule { }
