import { Component, ViewChild } from '@angular/core';
import { ConBeComponent } from '../con-be/con-be.component';

@Component({
  selector: 'app-cha',
  templateUrl: './cha.component.html',
  styleUrls: ['./cha.component.scss']
})
export class ChaComponent {
  @ViewChild('thangviet') 'thangviet': ConBeComponent | undefined;
  @ViewChild('thangnam') 'thangnam': ConBeComponent | undefined; 

  public chaoCon(name: string){
    console.log('chao con '+ name);
  }

  public choTien(){
    this.thangviet?.xinTien(5);
    this.thangnam?.xinTien(40);
  }
}
