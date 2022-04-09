import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators ,FormBuilder} from '@angular/forms';
import {AddUser} from '../../model/User.model';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  userForm!: FormGroup;
  addUser:AddUser= new AddUser();
  list: any;

  constructor(private formbuilder:FormBuilder,private userservice:UserService) { }

  ngOnInit(): void {
    this.getList();
    this.userForm=this.formbuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  getList(){
    this.userservice.getUser().subscribe((data)=>{
      console.log(data);
      this.list=data;
    })
  }
  submit(){

    this.userForm.value;
    console.log(this.userForm.value)
    this.userservice.addUser(this.addUser).subscribe((data)=>{
      console.log(data);
      this.getList();
    })
  }
  delete(item:any){
    this.userservice.deleteUser(item.id).subscribe((data)=>{
      console.log(data);
      this.getList();
    })
    

  }
  edit(item:any){
    this.addUser=item;
  }
  update(){
    this.userservice.update(this.addUser,this.addUser.id).subscribe((data)=>{
      console.log(data);
      this.getList();
    })

  }

}
