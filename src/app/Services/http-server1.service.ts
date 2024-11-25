import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServer1Service {
  private REST_API_COMMENTS = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  public getComments(): Observable<any> {
    const url = `${this.REST_API_COMMENTS}/comments`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
}
