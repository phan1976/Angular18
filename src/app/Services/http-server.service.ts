import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpServerService {
  private REST_API_SERVER = 'http://localhost:3000';
  private REST_API_SERVER_RANDOM_USERS = 'https://randomuser.me/api/?results=';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
      //authorization: 'my-auth-token'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getComments(): Observable<any> {
    const url = `${this.REST_API_SERVER}/commands`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
}
  
  export class HttpServerService {
  private REST_API_CONTENTS = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':'application/json'
    })
  }
  
  
  

  constructor(private httpClient: HttpClient) { }
}
