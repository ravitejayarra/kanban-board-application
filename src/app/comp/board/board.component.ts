import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicService } from 'src/app/basic.service';
import { Stage } from 'src/app/Responses/Stage';
import { TaskResponse } from 'src/app/Responses/TaskResponse';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
name:String="";
tasks :TaskResponse[] =[] ;
pipeline_tasks :TaskResponse[] =[];
todo_tasks :TaskResponse[] =[];
progress_tasks :TaskResponse[]=[];
review_tasks :TaskResponse[] =[];
closed_tasks :TaskResponse[] =[];

  constructor(private routes:ActivatedRoute , private service:BasicService, private router:Router) { }

  ngOnInit(): void {
       this.refresh();
  }


    refresh(){
      this.name=this.routes.snapshot.params['name'];
      //console.log(this.name);
      this.service.loadTasks(this.name).subscribe(data=>{
        console.log(data);
        this.tasks = data;
        
        console.log(this.tasks.length);
        
        this.divide();
       
        
      },err=>{
         this.router.navigate(['/']);
      });
    }

   divide(){
     
    for(let task of this.tasks){
      if(task.stage == Stage.PIPELINE){
        this.pipeline_tasks.push(task);
      }
      else if(task.stage == Stage.TODO){
        this.todo_tasks.push(task);
      }
       else if(task.stage == Stage.PROGRESS){
         this.progress_tasks.push(task);
       }
       else if(task.stage == Stage.REVIEW){
         this.review_tasks.push(task);
       }
       else if(task.stage == Stage.CLOSED){
         this.closed_tasks.push(task);
       }

   }



   }

  addTask(){
    this.router.navigate(['Tasks/addTask',this.name]);
  }

  editTask(id:Number){
    this.router.navigate(['Tasks/editTask',id,this.name]);
  }

  deleteTask(id:Number){
    console.log("task deleted");
    this.service.deleteTask(id).subscribe(data=>{
      
   // console.log(data);
      this.empty();
      this.refresh();
    
    });
  }
  moveTask(task:TaskResponse,stage:Number){
      console.log("-------!!!!----");
      //begin if loop
      if(stage==0){
        task.stage = Stage.TODO;
       this.service.moveTask(task).subscribe(data=>{
         this.empty();
         this.refresh();
         
       });
 
        return;
       }
       //end 
       //begin if loop
      if(stage==1){
        task.stage = Stage.PROGRESS;
       this.service.moveTask(task).subscribe(data=>{
         this.empty();
         this.refresh();
         
       });
 
        return;
       }
       //end 
       //begin if loop
      if(stage==2){
        task.stage = Stage.REVIEW;
       this.service.moveTask(task).subscribe(data=>{
         this.empty();
         this.refresh();
         
       });
 
        return;
       }
       //end 
        //begin if loop
      if(stage==3){
        task.stage = Stage.CLOSED;
       this.service.moveTask(task).subscribe(data=>{
         this.empty();
         this.refresh();
         
       });
 
        return;
       }
       //end 
       
  }
  
  
  empty(){
        this.pipeline_tasks=[];
        this.todo_tasks=[];
        this.progress_tasks=[];
        this.review_tasks=[];
        this.closed_tasks=[];
  }

}
