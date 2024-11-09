import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) {}

  //Get das informações do usuário (nome, email, etc)
  getUserProfile(userId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/user_profile/${userId}`);
  }

  //Get do histórico do usuário
  getUserHistory(userId: number): Observable<{ history: any[] }> {
    return this.httpClient.get<{ history: any[] }>(`${this.apiUrl}/task_history/${userId}`);
  }
}