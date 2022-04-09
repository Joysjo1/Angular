import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userForm!: FormGroup;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.userForm=this.formbuilder.group({
      email:['',Validators.required],
      Password:['',Validators.required],
      file:['',Validators.required]
    })
  }
  submit(){
    console.log(this.userForm.value)
  }
  ngcheck(){
    console.log("hello")
  }

}
