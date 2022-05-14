import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicService } from 'src/app/basic.service';
import { Stage } from 'src/app/Responses/Stage';
import { Task } from 'src/app/Responses/Task';
import { TaskRequest } from 'src/app/Responses/TaskRequest';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  projectName:String ="";
  taskName?:Number;
  pname:String="";
  //deadline:String="";
  task:TaskRequest = new TaskRequest("","") ;
  task1 :Task = new Task(0,"",Stage.PIPELINE,"");
  constructor(private routes:ActivatedRoute,private service:BasicService,private router:Router) { }

  ngOnInit(): void {
    this.projectName = this.routes.snapshot.params['projectName'];
    this.taskName = this.routes.snapshot.params['taskName'];
    this.pname=this.routes.snapshot.params['pname'];
    //console.log(this.projectName);
    
    if(this.taskName){
      console.log(this.taskName);
      this.service.loadTask(this.taskName).subscribe(data=>{
              this.task1 = data;
      });
    }
  }

  addTask(){
    console.log("adding task");
   console.log(this.task);
   this.service.addTasks(this.task,this.projectName).subscribe(data=>{
     console.log(data);
     this.router.navigate(['projectTasks',this.projectName]);
   },
   err=>{
    this.router.navigate(['Tasks/addTask',this.projectName]);
   });
  }

  editTask(task:Task){
       console.log("-------edit task---");
       console.log(task);
       this.service.editTask(task).subscribe(data=>{
         this.router.navigate(['projectTasks',this.pname]);
       })
  }



}
