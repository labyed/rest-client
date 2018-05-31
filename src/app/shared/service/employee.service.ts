import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee.model';
import { map } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
import {EmployeeDetails} from '../model/employee.details.model';

@Injectable()
export class EmployeeService {
  constructor(private http:HttpClient) { }
  data;
  public getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:8080/rest-server/employees');
  }
  public getEmployee(id:number):Observable<Employee>{
    return this.http.get<Employee>('http://localhost:8080/rest-server/employee/:id'.replace(':id',id + ''));
  }
  public deleteEmployee(id:number){
    return this.http.delete('http://localhost:8080/rest-server/employee/:id'.replace(':id',id + ''));
  }
  public addEmployee(employeeDetails:EmployeeDetails): Observable<Employee> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    console.log(employeeDetails);
    return this.http.post<Employee>(
      'http://localhost:8080/rest-server/employee', employeeDetails,{headers: headers});
  }
  public editEmployee(employee:Employee): Observable<Employee> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.put<Employee>(
      'http://localhost:8080/rest-server/employee', employee,{headers: headers});
  }
}
