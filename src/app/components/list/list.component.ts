import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list: any;

  constructor(private listService:ListService) { }
number:any
  ngOnInit(): void {
    this.getlist();
  }
  getlist(){
    this.listService.getList().subscribe((data:any)=>{
      console.log(data)
      this.list=data.data;

    })
  }

}
