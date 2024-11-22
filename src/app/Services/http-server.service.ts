import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
  private REST_API_CONTENTS = 'http://localhost:3000';
  private httpOptions = this.httpOptions({
    headers: new Headers({
      'Content-Type':'application/json'
    })
  });

  constructor(private httpClient: HttpClient) { }
}
