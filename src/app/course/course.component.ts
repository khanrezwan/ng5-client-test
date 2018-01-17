import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  value: number;
  constructor() { }
  
  ngOnInit() {
    this.value = 88;
  }

}
