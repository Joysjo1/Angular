import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';

const routes: Routes = [
  {
    path:'siginin',component:SigninComponent
  },
  {
    path:'add',component:AddComponent
  },
  {
    path:'form',component:FormComponent
  },{
    path:'list',component:ListComponent
  },
  {
    path:'list/:id',component:FormComponent
  },
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
