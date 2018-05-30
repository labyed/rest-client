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
  employee:Employee;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.test().subscribe((employee)=> this.employee = employee);
  }
  delete(event){
    console.log('done');
  }

}
