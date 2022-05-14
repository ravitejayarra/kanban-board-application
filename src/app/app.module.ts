import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './comp/basic/basic.component';
import { HomeComponent } from './comp/home/home.component';
import { BoardComponent } from './comp/board/board.component';
import { TaskComponent } from './comp/task/task.component';
import { FormsModule } from '@angular/forms';
import { LoadprojectComponent } from './comp/loadproject/loadproject.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    HomeComponent,
    BoardComponent,
    TaskComponent,
    LoadprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
