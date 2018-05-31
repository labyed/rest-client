import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/employee.model';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../service/employee.service';
import {EmployeeDetails} from '../model/employee.details.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  employee:Employee;
  id:number;
  date:any;
  constructor(private route : ActivatedRoute, private router:Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee(NaN,new EmployeeDetails());
      this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
        // In a real app: dispatch action to load the details here.
      });
      if(!isNaN(this.id)){
        this.employeeService.getEmployee(this.id).subscribe((employee)=>{
          this.employee = employee;
          this.date = new Date(this.employee.employeeDetails.birthDate);
        });
      }

  }
  save(){
    this.employee.employeeDetails.birthDate = this.date;
    if(isNaN(this.id)){
      console.log(this.employee.id);
      this.employeeService.addEmployee(this.employee.employeeDetails).subscribe((e)=>{
        this.router.navigate(['/employees']);
      });
    }else{
      this.employeeService.editEmployee(this.employee).subscribe((e)=>{
        this.router.navigate(['/employees']);
      });
    }
  }
  cancel(){
    this.router.navigate(['/employees']);
  }

}
