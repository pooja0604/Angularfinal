import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';

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
    this.students = this._studentService.getAll();
  }

  handleEdit(studentId){
    this._router.navigate(['/students/form',studentId]);
  }

  handleDelete(studentId){
    if(confirm(`Are you sure you want to delete student with id ${studentId}`)){
      this._studentService.delete(studentId);
      let index = this.students.findIndex(a => a.studentId === studentId);
      this.students.splice(index,1);
    }
   
  }

}
