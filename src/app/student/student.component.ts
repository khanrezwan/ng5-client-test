import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student';
import { MatFormFieldControl } from '@angular/material';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[];
  test = 1;
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getAll().subscribe((res) => {
      this.students = res;
      console.log(res[0].phoneList);
    }, (err) => {
      console.log(err);
    });
  }

}
