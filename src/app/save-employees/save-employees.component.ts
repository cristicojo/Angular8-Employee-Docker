import {Component, OnInit} from '@angular/core';
import {Employee} from '../dto/employee';
import {EmployeeService} from '../service/employee.service';

@Component({
  selector: 'app-save-employees',
  templateUrl: './save-employees.component.html',
  styleUrls: ['./save-employees.component.css']
})


export class SaveEmployeesComponent implements OnInit {

  employee: Employee = new Employee();
  message: string;
  constructor(private service: EmployeeService) {
  }

  ngOnInit() {
  }


  public getSavedEmployee() {
    const response = this.service.saveEmployee(this.employee);
    response.subscribe(() => this.message = 'Employee Saved Successfully !');
    setTimeout(() => {this.message = ''; }, 3000);

  }
}
