import { Student } from "../student/student";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class StudentService{
    private url:string ="http://localhost:8080/students";
    
    constructor(private _httpClient:HttpClient){

    }

    getAll(){
        return this._httpClient.get(this.url);
    }
    
    delete(studentId){
         return this._httpClient.delete(`${this.url}/${studentId}`,{observe:'response'});
    }

    getById(studentId){
        return this._httpClient.get(`${this.url}/${studentId}`);
    }

    save(obj){
       console.log(obj);
       const httpOptions={
        headers: new HttpHeaders({
           'Content-Type':'application/json'
       })
    };

    if(obj.studentId){
        return this._httpClient.put(`${this.url}/${obj.studentId}`,JSON.stringify(obj),httpOptions);

    }
       return this._httpClient.post(this.url,JSON.stringify(obj),httpOptions);
    }  
} 
/*
    getMaxId(){
        let maxId=0;
        for(let a of this.students){
            if(a.studentId > maxId){
                maxId = a.studentId;
            }
        }
        return maxId + 1;
    }*/

