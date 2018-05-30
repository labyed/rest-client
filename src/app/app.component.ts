import {Component, OnInit} from '@angular/core';
import {EmployeeService} from './shared/service/employee.service';
import {Employee} from './shared/model/employee.model';
import {ActivatedRoute, ActivatedRouteSnapshot, Route, Router, Routes} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  employee:Employee;
  constructor(private employeeService: EmployeeService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(){
    this.employeeService.test().subscribe((employee)=> this.employee = employee);
  }
  test(){
    this.router.navigate(['/employees']);
  }
}
