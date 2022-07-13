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
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
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
