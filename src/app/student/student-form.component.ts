import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import {NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { HttpErrorResponse } from '@angular/common/http';


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
      this._studentService.getById(parseInt(studentId)).subscribe((student)=>{
        this.student=student as Student
      });
    }
  }

  handleSubmit(studentForm:NgForm){
   
    if(this.student.studentId !== -1){
      studentForm.value.studentId = this.student.studentId;
    }
    this._studentService.save(studentForm.value).subscribe((data)=>{
    this._router.navigate(['/students/list']);
    },(error:HttpErrorResponse)=>{
      if(error.status === 404){
        alert("The student you are trying to update is not found")
        this._router.navigate(['/students/list']);
      }
    })
  }
}
