import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
  
  // private REST_API_COMMENTS = 'http://localhost:3000';
  
  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':'application/json'
  //     //authorization: 'my-auth-token'
  //   })
  // };
  

  // constructor(private httpClient: HttpClient) { }

  // public getComment(): Observable<any> {
  //   const url = `${this.REST_API_COMMENTS}/comments`;
  //   return this.httpClient.get<any>(url, this.httpOptions);
  // }

  
}
