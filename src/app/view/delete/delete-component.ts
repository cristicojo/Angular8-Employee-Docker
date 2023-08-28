import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../service/employee.service";
import {Router} from "@angular/router";
import {EmployeeDto} from "../../dto/employee.dto";

@Component({
    selector: 'app-delete-employees',
    templateUrl: './delete-component.html',
    styleUrls: ['./delete-component.css']
})
export class DeleteComponent implements OnInit {

    employeeList: EmployeeDto[];

    constructor(private employeeService: EmployeeService, private router: Router) {
    }

    ngOnInit() {
        this.employeeService.deleteAll().subscribe((response: any) => {
            this.employeeList = response;
            this.router.navigate(['/employee-list'])
        });
    }

}
