import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTasksService {

  private apiUrl = 'http://localhost:5000/userTasks';

  constructor(private httpClient: HttpClient) { }

  //Get das tasks pendentes
  pendingTask(user_id: string): Observable<{ task: any }> {
    return this.httpClient.get<{ task: any }>(`${this.apiUrl}/get-user-in-progress-tasks/${user_id}`);
  }

  //Post para enviar tarefa para usuário
  assignTask(userId: string, taskId: number): Observable<{ message: string }> {
    return this.httpClient.post<{ message: string }>(`${this.apiUrl}/create-user-task`, {userId, taskId});
  }

  //Post para setar tarefa como concluída
  completeTask(userTaskId: number): Observable<{ message: string, tasks: any[] }> {
    return this.httpClient.post<{ message: string, tasks: any[] }>(`${this.apiUrl}/complete-task`, {userTaskId});
  }

  abandonTask(userTaskId: number): Observable<{ message: string, tasks: any[] }> {
    return this.httpClient.post<{ message: string, tasks: any[] }>(`${this.apiUrl}/abandon-task`, {userTaskId});
  }

  //Get do histórico do usuário
  getUserHistory(userId: number): Observable<{ history: any[] }> {
    return this.httpClient.get<{ history: any[] }>(`${this.apiUrl}/get-user-tasks/${userId}`);
  }
}