import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visitor } from './visitor';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  private baseURL= "http://localhost:8080/visit/visitor";
   
  constructor(private httpClient: HttpClient) { }

  getVisitorList(): Observable<Visitor[]>{
    return this.httpClient.get<Visitor[]>(`${this.baseURL}`);
  }

  createVisitor(visitor: Visitor): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, visitor);
  }

  getVisitorById(id: number): Observable<Visitor>{
    return this.httpClient.get<Visitor>(`${this.baseURL}/${id}`);
  }

  updateVisitor(id: number, visitor: Visitor): Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, visitor);
  }

  deleteVisitor(id: number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
