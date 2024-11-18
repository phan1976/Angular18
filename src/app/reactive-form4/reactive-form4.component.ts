import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form4',
  templateUrl: './reactive-form4.component.html',
  styleUrls: ['./reactive-form4.component.scss']
})
export class ReactiveForm4Component {
  constructor(private formBuilder: FormBuilder){};
  public formData = this.formBuilder.group({
    name:['', Validators.required],
    age:['', Validators.required],
  });

  public onSubmit():void {
    console.log(this.formData.value);
  }

}
