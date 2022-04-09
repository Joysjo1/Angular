import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path:'siginin',component:SigninComponent
  },
  {
    path:'',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,

]
})
export class AppRoutingModule { }
