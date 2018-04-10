import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styles: []
})
export class StudentListComponent implements OnInit {
  students:Array<Student>=[];
  constructor(private _studentService:StudentService,
    private _router:Router) { }

  ngOnInit() {
     this._studentService.getAll().subscribe((data)=>{
       this.students = data as Array<Student>;
     },(error)=>console.log(error));
  }

  handleEdit(studentId){
    this._router.navigate(['/students/form',studentId]);
  }

  handleDelete(studentId){
    if(confirm(`Are you sure you want to delete student with id ${studentId}`)){
      this._studentService.delete(studentId).subscribe(()=>{
        const index = this.students.findIndex(a => a.studentId === studentId);
        this.students.splice(index,1);
       },(error:HttpErrorResponse)=>{
        if(error.status === 404){
          alert("The student you are trying to delete is not found"); 
          this._studentService.getAll().subscribe(students =>{
             this.students = students as Array<Student>;
          });
      }
    });
   }
  }
}
