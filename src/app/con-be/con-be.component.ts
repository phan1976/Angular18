import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-con-be',
  templateUrl: './con-be.component.html',
  styleUrls: ['./con-be.component.scss']
})
export class ConBeComponent {
  //public name = '';
  @Input() name: string = '';
  @Output() traloi: EventEmitter<any> = new EventEmitter();

  public chaoCha(){
    console.log('chao cha con la ', this.name);
    this.traloi.emit(this.name);
  }

  public xinTien(amounte: number){
    console.log('Cam on Ba da cho con ' + this.name + ' ' + amounte + ' euro');
  }

}
