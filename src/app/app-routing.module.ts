import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BasicComponent } from './comp/basic/basic.component';
import { BoardComponent } from './comp/board/board.component';
import { HomeComponent } from './comp/home/home.component';
import { LoadprojectComponent } from './comp/loadproject/loadproject.component';
import { TaskComponent } from './comp/task/task.component';

const routes: Routes = [
  
  {path:'',component:LoadprojectComponent},
   {path: 'board' , component:BoardComponent},
  { path: 'ppp', component: BasicComponent },
  {path:'task',component:TaskComponent},
  {path:'projectTasks/:name',component:BoardComponent},
  {path:'Projects/addProject',component:HomeComponent},
  {path:'Tasks/addTask/:projectName',component:TaskComponent},
  {path:'Tasks/editTask/:taskName/:pname' , component:TaskComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
