import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private apiUrl = 'http://localhost:8787/issues';

  constructor(private http: HttpClient) { }

  // Create 
  createIssue(issue: Issue): Observable<any> {
    return this.http.post(this.apiUrl, issue);
  }

  //list
  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.apiUrl);
  }

  // Update 
  updateIssue(id: number, issue: Issue): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, issue);
  }

  // Delete 
  deleteIssue(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }



}


export interface Issue {
  id: number;
  title: string;
  description: string;
}