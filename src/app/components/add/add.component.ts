import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addEmp } from 'src/app/model/add.model';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  userForm!: FormGroup;
  constructor(private formbuilder:FormBuilder,private listService:ListService) { }
  adduser:addEmp= new addEmp();

  ngOnInit(): void {
    this.userForm=this.formbuilder.group({
      name:['',Validators.required],
      job:['',Validators.required]
    })
  }
  add(){
    console.log(this.userForm.value);
    this.listService.adduser(this.adduser).subscribe((data:any)=>{
      console.log(data)
    })
    

  }

}
