import { Component ,OnInit} from '@angular/core';

import { AbstractControl, FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { Validation } from './validation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ReactiveFormExample';

  submitted =false;

    form: FormGroup = new FormGroup({
                  fullname:new FormControl(),
                  username:new FormControl(),
                  email:new FormControl(),
                  password:new FormControl(),
                  confirmpassword:new FormControl(),
          })

      constructor(private frmbuilder : FormBuilder){}

ngOnInit(){

    this.form = this.frmbuilder.group(
      {
            fullname:['',Validators.required],
            username:['',Validators.required,Validators.minLength(6),
                            Validators.maxLength(10)],
            email:['',Validators.required,Validators.email],
            password:['',Validators.required,
                          Validators.minLength(6),
                        Validators.maxLength(10)],
            confirmpassword:['',Validators.required]
      },
      {
          validators: [Validation.match('password','confirmpassword')]
      }

    )
}

get func(): {
  [key: string]: AbstractControl}
{
    return this.form.controls;

}

onSubmit():void
{
    this.submitted=true
        if(this.form.invalid)
              {
                return;
              }

}

}
