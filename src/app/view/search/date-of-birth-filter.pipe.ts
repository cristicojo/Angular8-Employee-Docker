import {Pipe, PipeTransform} from '@angular/core';
import {EmployeeDto} from "../../dto/employee.dto";

@Pipe({
  name: 'dateOfBirthFilter'
})
export class DateOfBirthFilterPipe implements PipeTransform {

  transform(employeeList: EmployeeDto[], searchName: string): any {

    if (!employeeList) {
      return [];
    }
    if (!searchName) {
      return employeeList;
    }

    employeeList = employeeList
      .filter(employee => employee.dob != null)
      .filter(employee => {
        return employee.dob.includes(searchName);
      });

    return employeeList;
  }

}
