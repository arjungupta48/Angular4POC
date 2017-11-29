import { Component, OnInit } from '@angular/core';

import {StudentService} from '../student.service';
import {IStudent} from '../student';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit {
  private students: Observable<IStudent>;
  private showHide: boolean;
  private showHideValue: string;
  
  constructor(private _studentService: StudentService) { 
    this.students = this._studentService.data;
    this.showHide = false;
    this.showHideValue = "Show";
  }

  ngOnInit() {    
    if (!this.students) {
      this._studentService.getStudents();
    }
  }

  setValue() {
    this.students = this._studentService.data;
  }

  canShowData() {
    this.setValue();
    this.showHide == true;
    this.showHide = !this.showHide;
    
    if(this.showHideValue == "Show") {
      this.showHideValue = "Hide";
    }
    else {
      this.showHideValue = "Show";
    }
  }
  
}
