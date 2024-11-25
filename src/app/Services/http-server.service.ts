import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  private REST_API_COMMENTS = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public getComments(): Observable<any> {
    const url = `${this.REST_API_COMMENTS}/comments`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public postComment(payload:any): Observable<any> {
    const url = `${this.REST_API_COMMENTS}/comments`;
    return this.httpClient.post<any>(url, payload, this.httpOptions);
  }
}
