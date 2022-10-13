import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { HttpClientModule} from '@angular/common/http'

const appRoute:Routes=[
  {
    path:"",component:CourseComponent
  },
  {
    path:"add",component:CourseComponent
  },
  {
    path:"view",component:ViewCourseComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    NavbarComponent,
    ViewCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
