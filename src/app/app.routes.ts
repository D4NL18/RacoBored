import { Routes } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { TasksHistoryComponent } from './views/tasks-history/tasks-history.component';

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
        path: "tasksHistory",
        component: TasksHistoryComponent
    }
];
