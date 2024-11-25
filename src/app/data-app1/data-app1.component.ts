import { Component } from '@angular/core';
import { HttpServer1Service } from '../Services/http-server1.service';

@Component({
  selector: 'app-data-app1',
  templateUrl: './data-app1.component.html',
  styleUrls: ['./data-app1.component.scss']
})
export class DataApp1Component {

  constructor(private httpServer: HttpServer1Service){}

  public ngOnInit(){
    this.httpServer.getComments().subscribe(data => {
      console.log('hien thi du lieu = ', data)
    })
  }

}
