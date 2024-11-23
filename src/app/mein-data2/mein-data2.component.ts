import { Component } from '@angular/core';
import { MeinServer2Service } from '../Services/mein-server2.service';

@Component({
  selector: 'app-mein-data2',
  templateUrl: './mein-data2.component.html',
  styleUrls: ['./mein-data2.component.scss']
})
export class MeinData2Component {
  constructor(private httpServer: MeinServer2Service){}

  public ngOnInit(){
    this.httpServer.getComment().subscribe(data => {
      console.log('Comments =', data)
    });
  }

}
