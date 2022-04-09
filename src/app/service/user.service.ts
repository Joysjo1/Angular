import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { AddUser } from '../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl='http://localhost:3000/posts'

  constructor(private http:HttpClient) { }
  getUser(){
   return  this.http.get(this.baseUrl )

  }
  addUser(data:AddUser){
    return this.http.post(this.baseUrl,data)
  }
  deleteUser(id:number){
    return this.http.delete(this.baseUrl+'/'+id)

  }
  update(data:AddUser,id:number){
    return this.http.put(this.baseUrl+'/'+ id,data)
  }
}
