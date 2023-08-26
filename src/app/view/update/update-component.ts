import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../service/employee.service";
import {EmployeeDto} from "../../dto/employee.dto";

@Component({
  selector: 'app-update-employees',
  templateUrl: './update-component.html',
  styleUrls: ['./update-component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: EmployeeService,
              private router: Router) {
  }

  id: string;
  employee: EmployeeDto = new EmployeeDto();

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.service.get(this.id).subscribe((response: any) => {
      this.employee = response;
      console.log(this.employee);
    });
  }

  updateData() {
    this.service.update(this.employee).subscribe(() => {
      alert("Updated Successfully!!");
      this.router.navigate(['/employee-list'])
    })
  };

}
