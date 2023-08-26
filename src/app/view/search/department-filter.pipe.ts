import { Pipe, PipeTransform } from '@angular/core';
import {EmployeeDto} from "../../dto/employee.dto";

@Pipe({
  name: 'departmentFilter'
})
export class DepartmentFilterPipe implements PipeTransform {

  transform(employeeList: EmployeeDto[], searchName: string): any {

    if (!employeeList) {
      return [];
    }
    if (!searchName) {
      return employeeList;
    }

    searchName = searchName.toLocaleLowerCase();
    employeeList = employeeList
      .filter(employee => employee.department != null)
      .filter(employee => {
        return employee.department.toLocaleLowerCase().includes(searchName);
      });

    return employeeList;
  }

}
