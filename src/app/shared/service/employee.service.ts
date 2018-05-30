import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee.model';
import { map } from 'rxjs/operators';
@Injectable()
export class EmployeeService {
  constructor(private http:HttpClient) { }

  public test():Observable<Employee>{
    //let params = new HttpParams();
    return this.http.get<Employee>('http://localhost:8080/rest-server/employee/12');
  }
}
