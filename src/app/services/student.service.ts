import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {catchError, map, tap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {Student} from './../models/student';

@Injectable()
export class StudentService {
  private serverURL = 'localhost:8080';
  private apiURL = 'api/v1';
  constructor( private httpClient: HttpClient) { }

  getAll():Observable<Student[]> {
    console.log('fired1');
    return this.httpClient.get<Student[]>('http://127.0.0.1:8080/api/v1/students');
    // this.httpClient.get<Student[]>('http://127.0.0.1:8080/api/v1/students').subscribe(data=>{
    //   console.log(data[0]);
    // });

  }
}