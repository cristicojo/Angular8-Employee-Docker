import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesServiceService {

  constructor(private httpClient: HttpClient) {
  }


  public saveEmployee(employees)  {
    return this.httpClient.post('http://localhost:8080/rest_api/employees', employees,
      {responseType: 'text' as 'json'});
  }
}
