import { Component } from '@angular/core';
import { MeinServerService } from '../Services/mein-server.service';

@Component({
  selector: 'app-mein-data',
  templateUrl: './mein-data.component.html',
  styleUrls: ['./mein-data.component.scss']
})
export class MeinDataComponent {
constructor(private meinServer: MeinServerService){}
public ngOnInit():void{
  this.meinServer.getComments().subscribe(data => {
    console.log('data =',data );
  });

  this.meinServer.getRandomUsers(5).subscribe(data => {
    console.log('randomUser = ', data)
  });
}
}
