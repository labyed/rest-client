import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee.model';
import { map } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
import {EmployeeDetails} from '../model/employee.details.model';

@Injectable()
export class EmployeeService {
  baseUrl="http://localhost:8080/rest-server";
  constructor(private http:HttpClient) { }
  data;
  public getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl+'/employees');
  }
  public getEmployee(id:number):Observable<Employee>{
    return this.http.get<Employee>(this.baseUrl+'/employee/:id'.replace(':id',id + ''));
  }
  public deleteEmployee(id:number){
    return this.http.delete(this.baseUrl+'/employee/:id'.replace(':id',id + ''));
  }
  public addEmployee(employeeDetails:EmployeeDetails): Observable<Employee> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    console.log(employeeDetails);
    return this.http.post<Employee>(this.baseUrl+ '/employee', employeeDetails,{headers: headers});
  }
  public editEmployee(employee:Employee): Observable<Employee> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.put<Employee>(this.baseUrl+'/employee', employee,{headers: headers});
  }
}
