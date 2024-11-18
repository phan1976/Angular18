import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective {

  constructor(private el: ElementRef) { 
    //@Input() appHightLight = 'blue';
    console.log('HightLight')
    this.el.nativeElement.style.color = 'red';
  }

}
