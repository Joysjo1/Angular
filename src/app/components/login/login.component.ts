import { Component, DoCheck, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,DoCheck {
  userForm!: FormGroup;
  name:any
  clicked: boolean=false;
  // list: any;

  constructor(private route:Router) {
    console.log("i am constructor")
   }
   submit(){
     this.clicked=true;
    //  console.log(this.userForm.value);
    //  this.list=this.userForm.value
     return this.route.navigate(['/siginin'])
   }

  ngOnInit(): void {
    console.log("i am ngonit")
    
  }
  ngOnChanges() {
    console.log("button clicked");
  }
  ngDoCheck() {
    console.log("DoCheck");
  }
  ngAfterContentInit() {
    console.log(" :ngAfterContentInit");
  }
 
  ngAfterContentChecked() {
    console.log("  AfterContentChecked");
  }
 
  ngAfterViewInit() {
    console.log("  AfterViewInit");
  }
 
  ngAfterViewChecked() {
    console.log("AfterViewChecked");
  }
 
  ngOnDestroy() {
    console.log(" ngOnDestroy");
  }

}
