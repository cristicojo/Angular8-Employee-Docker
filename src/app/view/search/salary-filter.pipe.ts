import {Pipe, PipeTransform} from '@angular/core';
import {EmployeeDto} from "../../dto/employee.dto";

@Pipe({
  name: 'salaryFilter'
})
export class SalaryFilterPipe implements PipeTransform {

  transform(employeeList: EmployeeDto[], searchName: string): any {

    if (!employeeList) {
      return [];
    }
    if (!searchName) {
      return employeeList;
    }

    employeeList = employeeList
      .filter(employee => employee.salary != null)
      .filter(employee => {
        return employee.salary.toString().includes(searchName);
      });

    return employeeList;
  }

}
