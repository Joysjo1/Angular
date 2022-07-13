import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SiginupComponent } from './component/siginup/siginup.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'siginup',component:SiginupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
