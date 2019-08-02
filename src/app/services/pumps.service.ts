import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pump } from '../models/pump';

@Injectable({
  providedIn: 'root'
})
export class PumpsService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getBeersPumps(): Observable<Pump[]> {
    return this.http.get<Pump[]>(`${this.url}/pump`);
  }

  addBeer(data): Observable<any> {
    return this.http.post(`${this.url}/pump`, data);
  }

  updateOutflow(body): Observable<any>  {
    return this.http.put(`${this.url}/pump/${body.id}`, body, {});
  }

  deletePump(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/pump/${id}`);
  }

}
