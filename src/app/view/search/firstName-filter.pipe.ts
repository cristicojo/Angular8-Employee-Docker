import {Pipe, PipeTransform} from '@angular/core';
import {EmployeeDto} from "../../dto/employee.dto";

@Pipe({
  name: 'firstNameFilter'
})
export class FirstNameFilterPipe implements PipeTransform {

  transform(employeeList: EmployeeDto[], searchName: string): any {

    if (!employeeList) {
      return [];
    }
    if (!searchName) {
      return employeeList;
    }

    searchName = searchName.toLocaleLowerCase();
    employeeList = employeeList
      .filter(employee => employee.firstName != null)
      .filter(employee => {
        return employee.firstName.toLocaleLowerCase().includes(searchName);
      });

    return employeeList;
  }

}
