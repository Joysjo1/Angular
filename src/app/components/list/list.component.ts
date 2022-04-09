import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list: any;

  constructor(private listService:ListService,private activatedRoute:ActivatedRoute) { }
number:any
  ngOnInit(): void {
    this.getlist();
    let value=this.activatedRoute.snapshot.params['id'];
    console.log(value)
  }
  getlist(){
    this.listService.getList().subscribe((data:any)=>{
      console.log(data)
      this.list=data.data;
    })
  }
  // getidlist(){
  //   this.listService.getlistbyid(id).subscribe((data:any)=>{
  //     console.log(data)
  //   })

  // }
  edit(){

  }
  delete(id:any){
    this.listService.remove(id).subscribe((data:any)=>{
      console.log(data)
    })
    

  }

}
