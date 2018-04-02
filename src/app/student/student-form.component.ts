import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import {NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styles: []
})
export class StudentFormComponent implements OnInit {

  
  student:Student = new Student(-1,"","","","");
  
  constructor(private _studentService:StudentService,
    private _router:Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const studentId = this._activatedRoute.snapshot.params['studentId'];
    if(studentId){
      this.student = this._studentService.getById(parseInt(studentId));
    }
  }

  handleSubmit(studentForm:NgForm){
    studentForm.value.studentId = this.student.studentId;
    this._studentService.save(studentForm.value);
    this._router.navigate(['/students/list']);
  }

}
