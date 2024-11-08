import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private apiUrl = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) { }

  generateTask(): Observable<{ tasks: any[], message: string }> {
    return this.httpClient.get<{ tasks: any[], message: string }>(`${this.apiUrl}/random_tasks`);
  }

  pendingTask(user_id: number): Observable<{ task: any }> {
    return this.httpClient.get<{ task: any }>(`${this.apiUrl}/pending_task/${user_id}`);
  }

  taskHistory(user_id: number): Observable<{ history: any[], message: string }> {
    return this.httpClient.get<{ history: any[], message: string }>(`${this.apiUrl}/task_history/${user_id}`);
  }

  assignTask(user_id: number, task_id: number): Observable<{ message: string }> {
    return this.httpClient.post<{ message: string }>(`${this.apiUrl}/assign_task/${user_id}/${task_id}`, {});
  }

  completeTask(user_id: number, task_id: number): Observable<{ message: string, tasks: any[] }> {
    return this.httpClient.post<{ message: string, tasks: any[] }>(`${this.apiUrl}/complete_task/${user_id}/${task_id}`, {});
  }
}