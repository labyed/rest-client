import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/service/employee.service';
import {EmployeesComponent} from '../employees/employees.component';
import {Employee} from '../shared/model/employee.model';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {
  employees:Employee;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((employee)=> this.employees = employee[0]);
  }
  delete(employee:Employee){
    this.employeeService.deleteEmployee(employee.id).subscribe(()=>{},
      (error)=>{console.log(error)},
      ()=>{
      console.log('refetching employees');
        this.employeeService.getEmployees().subscribe((employee)=> this.employees = employee[0]);
      });
  }

}
