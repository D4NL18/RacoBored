import { Routes } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { AddTaskComponent } from './views/add-task/add-task.component';
import { ProfileComponent } from './views/profile/profile.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "addTask",
        component: AddTaskComponent
    },
    {
        path: "profile",
        component: ProfileComponent
    }
];
