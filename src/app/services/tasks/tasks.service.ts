import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private httpClient: HttpClient) { }

  //Get de task aleatória
  generateTask(): Observable<{ tasks: any[] }> {
    return this.httpClient.get<{ tasks: any[] }>(`${this.apiUrl}/get-random-tasks`);
  }

}