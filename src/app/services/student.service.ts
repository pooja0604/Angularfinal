import { Student } from "../student/student";

export class StudentService{
    private students:Array<Student>=[
        new Student(1,"Paul","M","Mark","28"),
        new Student(2,"Jack", "R","Lewis","30")
    ];

    getAll(){
        return this.students;
    }
    
    delete(studentId){

    }

    getById(studentId){
        for(let student of this.students){
            if(student.studentId === studentId){
                return student;
            }
        }
        return null;
    }

    save(obj){
        if(obj.studentId === -1){
            obj.studentId = this.getMaxId();
            this.students.push(obj);
        }else{
            console.log(obj);
            const index = this.students.findIndex(a => a.studentId === obj.studentId);
            console.log(index);
            this.students[index] = obj;
        }

        
    }

    getMaxId(){
        let maxId=0;
        for(let a of this.students){
            if(a.studentId > maxId){
                maxId = a.studentId;
            }
        }
        return maxId + 1;
    }
}