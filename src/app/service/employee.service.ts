import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeeDto} from "../dto/employee.dto";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }


  public save(employee: EmployeeDto)  {
    return this.httpClient.post(environment.API_BASE_URL + "/create", employee);
  }

  public update(employee: EmployeeDto)  {
    return this.httpClient.post(environment.API_BASE_URL + "/create", employee);
  }

  public getAll()  {
    return this.httpClient.get(environment.API_BASE_URL + "/find/all");
  }

  public get(id: string)  {
    return this.httpClient.get(environment.API_BASE_URL + "/employee/" + id);
  }

  public delete(id: number)  {
    return this.httpClient.delete(environment.API_BASE_URL + "/employee/" + id);
  }

  public deleteAll()  {
    return this.httpClient.delete(environment.API_BASE_URL + "/all");
  }
}
