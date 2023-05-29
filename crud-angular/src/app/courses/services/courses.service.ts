import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list(): Course[] {
return [
  { _id:'1', name:'Angular', category:'Front-End' },
  { _id:'2', name:'Java', category:'Back-End' },
  { _id:'3', name:'PHP', category:'Back-End' },
  { _id:'4', name:'NodeJS', category:'Back-End' }
];
  }
}
