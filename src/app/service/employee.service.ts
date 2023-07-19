import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from "../dto/employee";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }


  public saveEmployee(employee: Employee)  {
    return this.httpClient.post(environment.API_BASE_URL + "/employee", employee);
  }

  public updateEmployee(employee: Employee, id: number)  {
    return this.httpClient.put(environment.API_BASE_URL + "/employee/id", employee);
  }

  public getEmployeeList()  {
    return this.httpClient.get(environment.API_BASE_URL + "/all");
  }

  public getEmployee(id: number)  {
    return this.httpClient.get(environment.API_BASE_URL + "/employee/id");
  }

  public deleteEmployee(id: number)  {
    return this.httpClient.delete(environment.API_BASE_URL + "/employee/id");
  }

  public deleteEmployeeList()  {
    return this.httpClient.delete(environment.API_BASE_URL + "/all");
  }
}
