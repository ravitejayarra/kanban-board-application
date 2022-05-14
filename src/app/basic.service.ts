import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import { Observable } from 'rxjs';
import {userResponse} from '../userResponse';
import { TaskResponse } from './Responses/TaskResponse';
import { ProjectResponse } from './Responses/ProjectResponse';
import { ProjectRequest } from './Responses/ProjectRequest';
import { TaskRequest } from './Responses/TaskRequest';
import { Task } from './Responses/Task';
@Injectable({
  providedIn: 'root'
})
export class BasicService {

  constructor(private http:HttpClient) { 
    

  }


  basic(){
  return this.http.get<userResponse>('http://localhost:8080/');
  }

  loadTasks(name:String){
     console.log("-----"+name+"-----");
    
     return this.http.get<TaskResponse[]>(`http://localhost:8080/Tasks/${name}`);
  }

  loadProjects(){
    return this.http.get<ProjectResponse[]>('http://localhost:8080/Projects');
  }
   
  addProject(project:ProjectRequest){
    return this.http.post('http://localhost:8080/Users/addUser',project);
  }
  

  addTasks(task:TaskRequest,projectName:String){
    return this.http.post(`http://localhost:8080/Tasks/addTask/${projectName}`,task);
  }

  deleteTask(id:Number){
    return this.http.delete(`http://localhost:8080/Tasks/deleteTask/${id}`);
  }

  deleteProject(id:Number){
    return this.http.delete(`http://localhost:8080/Projects/deleteProject/${id}`);
  }
  
  moveTask(task:TaskResponse){
       return this.http.put('http://localhost:8080/Tasks/updateTask',task);
  }
  loadTask(id:Number){
       return this.http.get<Task>(`http://localhost:8080/Tasks/loadTask/${id}`);
  }

  editTask(task:Task){
    return this.http.put('http://localhost:8080/Tasks/updateTask',task);
  }

}
