import { Component } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent {
  constructor(private httpServer: HttpServerService){}

  public ngOnInit(){
    const payload = {"id": "5",
      "body": "some comment5",
      "postId": 5}
    this.httpServer.postComment(payload).subscribe(data => {
      console.log('post data ', data);
    })
  }

}
