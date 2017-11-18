import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {IStudent} from './student';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StudentService {
  private _url: string = "assets/studentdata.json"
  constructor(private _http: Http) { }

  getStudents(): Observable<IStudent[]> {
    return this._http.get(this._url)
      .map((response: Response) => response.json());
  }
}


