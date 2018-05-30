import {RouterModule, Routes} from '@angular/router';
import {EmployeesComponent} from './employees/employees.component';
import {EmployeeCardComponent} from './employee-card/employee-card.component';


const ROUTES: Routes = [
  { path: 'employees', component: EmployeesComponent},
  { path: 'employee/:id', component: EmployeeCardComponent},
  { path: '', pathMatch: 'full', redirectTo: 'employees' }
];
export const APP_ROUTES = RouterModule.forRoot(ROUTES);
