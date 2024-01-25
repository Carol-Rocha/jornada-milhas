import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PassagensService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpclient: HttpClient) {}

  submitForm() {}
}
