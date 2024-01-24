import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDepoimento } from '../../types/types';

@Injectable({
  providedIn: 'root',
})
export class DepoimentoService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpclient: HttpClient) {}

  listarDepoimentos(): Observable<IDepoimento[]> {
    return this.httpclient.get<IDepoimento[]>(`${this.apiUrl}/depoimentos`);
  }
}
