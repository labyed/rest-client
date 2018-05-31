import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/service/employee.service';
import {EmployeeEditComponent} from '../employee-edit/employee-edit.component';
import {Employee} from '../shared/model/employee.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees:Employee[] ;
  constructor(private employeeService: EmployeeService,private _router: Router) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((employee)=> this.employees= employee,
      (error)=>{
      console.log(error);
      },()=> console.log(this.employees));
  }
  delete(employee:Employee){
    this.employeeService.deleteEmployee(employee.id).subscribe(()=>{},
      (error)=>{console.log(error)},
      ()=>{
        console.log('refetching employees');
        this.employeeService.getEmployees().subscribe((employee)=> this.employees= employee);
      });
  }
  createEmployee() {
    this._router.navigate(['/create/employee']);
  }

}
