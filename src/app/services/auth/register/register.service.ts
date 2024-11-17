import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterResponse } from '../../../types/register-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:5000/auth';

  constructor(private httpClient: HttpClient) { }

  //post de criação de usuário
  register(username: string, email: string, password: string) {
    return this.httpClient.post<RegisterResponse>(`${this.apiUrl}/register`, {username, email, password});
  }
}
