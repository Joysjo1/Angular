import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userForm!: FormGroup;
  id:any;
  list: any;
  constructor(private formbuilder:FormBuilder,private route:ActivatedRoute,private listService:ListService,private router:Router) { }

  ngOnInit(): void {
    this.userForm=this.formbuilder.group({
      email:['',Validators.required],
      Password:['',Validators.required],
      file:['',Validators.required]
    })
    this.id=this.route.snapshot.queryParamMap.get('id');
    this.getbyid();
  }
  submit(){
    console.log(this.userForm.value)
  }
  ngcheck(){
    console.log("hello")
  }
  getbyid(){
    this.listService.getlistbyid(this.id).subscribe((data:any)=>{
      console.log(data.data);
      this.list=data.data;

    })
  
  }
  back(){
    this.router.navigate(['/list'])
    
  }


}
