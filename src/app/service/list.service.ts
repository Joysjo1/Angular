import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  baseUrl='https://reqres.in/api/users?pages=2';

  constructor(private http:HttpClient) { }
  getList(){
   return  this.http.get(this.baseUrl)

  }
  getlistbyid(id:number){
    return this.http.get('https://reqres.in/api/users'+'/'+id)
  }
}
