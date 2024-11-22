import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
  private REST_API_CONTENTS = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeader({
        'Content-Type':'application/json'
    })
  }
  
  
  

  constructor(private httpClient: HttpClient) { }
}
