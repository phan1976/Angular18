import { Component } from '@angular/core';
import { MeinServer2Service } from '../Services/mein-server2.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent {
  constructor(private httpServer: MeinServer2Service){}

  public ngOnInit(){
    const payload = {"id":"4", "body":"some comment4", "postId":4};
    this.httpServer.postComment(payload).subscribe(data => {
      console.log('post comment = ', data)
    });
  }

}
