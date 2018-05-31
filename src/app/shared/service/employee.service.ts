import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee.model';
import { map } from 'rxjs/operators';
@Injectable()
export class EmployeeService {
  constructor(private http:HttpClient) { }

  public getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:8080/rest-server/employees');
  }
  public deleteEmployee(id:number){
    this.http.delete('http://localhost:8080/rest-server/employee/:id'.replace(':id',id + ''));
    console.log('http://localhost:8080/rest-server/employee/:id'.replace(':id',id + ''));
  }
}
