import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form2',
  templateUrl: './reactive-form2.component.html',
  styleUrls: ['./reactive-form2.component.scss']
})
export class ReactiveForm2Component {
  //private formBuilder = inject(FormBuilder);
  public dataForm = this.formBuilder.group({
    name:['',Validators.required],
    age:['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder){};

  public onSubmit():void {
    console.log(this.dataForm.value);
  }
  

}
