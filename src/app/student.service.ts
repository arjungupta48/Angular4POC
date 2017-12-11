import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {IStudent} from './student';

@Injectable()
export class StudentService {
  private _url: string = "assets/studentdata.json";
  public data : Observable<IStudent>;

  constructor(private _http: Http) { }

  getStudents() {
    return this._http.get(this._url)
               .map((response: Response) => response.json())
               .subscribe(response => this.data = response);             
  }
  
}


