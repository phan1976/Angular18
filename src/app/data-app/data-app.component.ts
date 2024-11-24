import { Component } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-data-app',
  templateUrl: './data-app.component.html',
  styleUrls: ['./data-app.component.scss']
})
export class DataAppComponent {

  // constructor(private httpServer: HttpServerService){}

  // public ngOnInit(){
  //   this.httpServer.getComments().subscribe(data => {
  //     console.log('get Comment = ', data)
  //   });
  // }
  constructor(private httpServerService: HttpServerService){};
  
  public ngOnInit():void {
    this.httpServerService.getComments().subscribe((data) => {
      console.log('getComments =', data);
    });

    // this.httpServerService.getRandomUsers(5).subscribe((data) => {
    //   console.log('getRandomUsers =', data);
    // });
  }

}
