import {Component, OnInit} from '@angular/core';
import {EmployeeDto} from "../../dto/employee.dto";
import {EmployeeService} from "../../service/employee.service";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-employee-list',
  templateUrl: './getAll.component.html',
  styleUrls: ['./getAll.component.css']
})
export class GetAllComponent implements OnInit {

  employeeList: EmployeeDto[];
  searchByFirstName: string = "";
  searchByDepartment: string = "";
  searchByDateOfBirth: string = "";
  searchBySalary: string = "";

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit() {
    this.employeeService.getAll()
      .subscribe((response: any) => {
        const datePipe = new DatePipe("en-US");
        response.forEach((employee: any) => {
          if (employee.dob != null) {
            employee.dob = datePipe.transform(employee.dob, 'dd.MM.yyyy HH:mm');
          }
        });
        this.employeeList = response;
        console.log(this.employeeList);
      });
  }

  update(id: string) {
    console.log(id);
    this.router.navigate(['/update', id]);
  };

  delete(id: string) {
    this.employeeService.delete(id).subscribe(() => {
      this.employeeList = this.employeeList.filter((employee: EmployeeDto) => {
        return id != employee.id;
      });
    });
  }
}
