import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILogin } from '../../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private apirUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  autenticar(payload: ILogin) {
    return this.httpClient.post(`${this.apirUrl}/auth/login`, payload);
  }
}
