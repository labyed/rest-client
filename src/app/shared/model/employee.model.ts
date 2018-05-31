import {EmployeeDetails} from './employee.details.model';

export class Employee {
    id:number;
    employeeDetails:EmployeeDetails;

  constructor(id: number, employeeDetails: EmployeeDetails) {
    this.id = id;
    this.employeeDetails = employeeDetails;
  }
}
