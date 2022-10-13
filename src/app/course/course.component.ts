import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private api:ApiService) { }

  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""

read=()=>{
  let data={
 "courseTitle":this.courseTitle,
  "courseDescription":this.courseDescription,
 "courseDuration":this.courseDuration,
  "courseDate":this.courseDate,
 "courseVenue":this.courseVenue,
  }
  console.log(data)
  this.api.addCourse(data).subscribe(
    (response:any)=>{
      console.log(response)
      alert("Course Added")
    }
  )
}

  ngOnInit(): void {
  }

}
