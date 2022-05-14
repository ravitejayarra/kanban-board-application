import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicService } from 'src/app/basic.service';
import { ProjectResponse } from 'src/app/Responses/ProjectResponse';

@Component({
  selector: 'app-loadproject',
  templateUrl: './loadproject.component.html',
  styleUrls: ['./loadproject.component.css']
})
export class LoadprojectComponent implements OnInit {

  
  Projects ?:ProjectResponse[];
  constructor(private service:BasicService,private router:Router) { }

  ngOnInit(): void {
    this.refresh();
  }

    refresh(){
      this.service.loadProjects().subscribe(data=>{
        this.Projects = data;
        console.log(data);
       })
    }




  LoadTasks(name:String){
  this.router.navigate(['projectTasks',name]);
  }
  addProject(){
         
    this.router.navigate(['Projects/addProject'])
  }
  deleteProject(id:Number){
        this.service.deleteProject(id).subscribe(data=>{
          console.log(data);
          this.refresh();
        })
  }
  
}
