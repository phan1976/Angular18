import { Component } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {
  public name = 'phan van thanh';

  constructor(private common:CommonService){}

  public submitForm():void {
    console.log('submitForm');
    this.common.submitData({name:this.name, tuoi:21});
  }
}
