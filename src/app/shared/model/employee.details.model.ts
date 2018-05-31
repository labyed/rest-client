export class EmployeeDetails {
  firstName:string;
  lastName:string;
  entity:string;
  mail:string;
  phone:string;
  location:string;
  birthDate:Date;

  constructor(){
    this.birthDate = new Date();
  }

}
