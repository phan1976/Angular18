import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public name:string = "Phan Van Thanh";
  public age = 16;
  public traicay = ['tao','nho','cam'];
  public resetName(): void {
    // console.log("resetName");
    this.name = "";
    this.age = 0;
  }

  public ngOnInit():void {
    console.log("trai cay = ",this.traicay);
  }

}
