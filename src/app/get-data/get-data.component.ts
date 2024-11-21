import { Component } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent {
  constructor(private httpServerService: HttpServerService){};
  
  public ngOnInit():void {
    this.httpServerService.getComments().subscribe((data) => {
      console.log('getComments =', data);
    });

    this.httpServerService.getRandomUsers(5).subscribe((data) => {
      console.log('getRandomUsers =', data);
    });
  }
}
