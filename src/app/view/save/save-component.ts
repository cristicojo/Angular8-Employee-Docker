import {Component, OnInit} from '@angular/core';
import {EmployeeDto} from '../../dto/employee.dto';
import {EmployeeService} from '../../service/employee.service';

@Component({
  selector: 'app-save-employees',
  templateUrl: './save-component.html',
  styleUrls: ['./save-component.css']
})


export class SaveComponent implements OnInit {

  employee: EmployeeDto = new EmployeeDto();
  constructor(private service: EmployeeService) {
  }

  ngOnInit() {
  }


  public saveEmployee() {
    this.service.save(this.employee).subscribe(() => {
      alert("Saved Successfully!!");
    });
  }
}
