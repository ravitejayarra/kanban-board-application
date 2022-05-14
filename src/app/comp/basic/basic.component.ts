import { Component, OnInit } from '@angular/core';
import {BasicService} from  'src/app/basic.service'


export class user{
  constructor(
    public id:Number,
    public name:String
  ){}
}



@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})

export class BasicComponent implements OnInit {

  constructor(private service:BasicService) { }

  ngOnInit(): void {
  }
  get(){
    this.service.basic().subscribe(data=>{
      console.log(data);
    })
  }
}
