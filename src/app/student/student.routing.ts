import { StudentPageComponent } from "./student-page.component";
import { StudentListComponent } from "./student-list.component";
import { StudentFormComponent } from "./student-form.component";
import { RouterModule } from '@angular/router';

const STUDENT_ROUTES = [
    {path:'', component: StudentPageComponent},
    {path:'', component: StudentPageComponent, children:[
        {path:'form', component: StudentFormComponent},
        {path:'form/:studentId', component: StudentFormComponent},
        {path:'list', component: StudentListComponent},     
    ]},  
];

export const STUDENT_ROUTING = RouterModule.forChild(STUDENT_ROUTES);