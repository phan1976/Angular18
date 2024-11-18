import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form3',
  templateUrl: './reactive-form3.component.html',
  styleUrls: ['./reactive-form3.component.scss']
})
export class ReactiveForm3Component {
  constructor(private formBuilder: FormBuilder){};
  public formData = this.formBuilder.group({
    name:['',Validators.required],
    age:['',Validators.required]
  })

  public onSubmit():void {
    console.log(this.formData.value);
  }

}
