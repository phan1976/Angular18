import { Component } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-data-app',
  templateUrl: './data-app.component.html',
  styleUrls: ['./data-app.component.scss']
})
export class DataAppComponent {

  //constructor(private httpServer: HttpServerService){}

  // public ngOnInit(){
  //   this.httpServer.getComment().subscribe(data => {
  //     console.log('get Comment = ', data)
  //   });
  // }

}
