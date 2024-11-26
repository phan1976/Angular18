import { Component } from '@angular/core';

@Component({
  selector: 'app-cha',
  templateUrl: './cha.component.html',
  styleUrls: ['./cha.component.scss']
})
export class ChaComponent {

  public chaoCon(name: string){
    console.log('chao con '+ name);
  }
}
