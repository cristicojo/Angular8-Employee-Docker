import {Component, OnInit} from '@angular/core';
import {Employees} from '../employees';
import {EmployeesServiceService} from '../employees-service.service';

@Component({
  selector: 'app-save-employees',
  templateUrl: './save-employees.component.html',
  styleUrls: ['./save-employees.component.css']
})


export class SaveEmployeesComponent implements OnInit {

  employees: Employees = new Employees();
  empList: Array<Employees> = [];
  message: string;
  constructor(private service: EmployeesServiceService) {
  }

  ngOnInit() {
  }


  public getSaveEmployee() {

    this.empList = [];
    this.empList.push(this.employees);
    const response = this.service.saveEmployee(this.empList);
    response.subscribe(() => this.message = 'Employee Saved Successfully !');
    setTimeout(() => {this.message = ''; }, 3000);

  }
}
