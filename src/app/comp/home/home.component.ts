import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicService } from 'src/app/basic.service';
import { ProjectRequest } from 'src/app/Responses/ProjectRequest';
import { user } from '../basic/basic.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
ProjectName:String="";
project?:ProjectRequest ;
  constructor( private route:Router,private service:BasicService) { }
  
  ngOnInit(): void {
  }


  addProject(){
      this.project = new ProjectRequest(this.ProjectName);
      console.log(this.project.name);
       this.service.addProject(this.project).subscribe(data=>{
         this.route.navigate(["/"]);
       },
       err=>{
         this.route.navigate(['Projects/addProject']);
       });
  }
}

