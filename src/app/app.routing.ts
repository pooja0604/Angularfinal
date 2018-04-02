import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";


const APP_ROUTES:Array<Route> = [
    {path:'', component: HomeComponent},
    {path:'students', loadChildren:'app/student/student.module#StudentModule'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
