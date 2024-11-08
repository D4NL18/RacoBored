import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) {}

  getUserHistory(userId: number): Observable<{ history: any[] }> {
    return this.httpClient.get<{ history: any[] }>(`${this.apiUrl}/user_history/${userId}`);
  }
}
