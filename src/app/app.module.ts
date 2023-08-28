import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveComponent } from './view/save/save-component';
import { DeleteComponent } from './view/delete/delete-component';
import { UpdateComponent } from './view/update/update-component';
import { EmployeeService } from './service/employee.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GetAllComponent } from './view/get/getAll.component';
import { FirstNameFilterPipe } from './view/search/firstName-filter.pipe';
import { DepartmentFilterPipe } from './view/search/department-filter.pipe';
import { DateOfBirthFilterPipe } from './view/search/date-of-birth-filter.pipe';
import { SalaryFilterPipe } from './view/search/salary-filter.pipe';
import { HomeComponent } from './view/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SaveComponent,
    DeleteComponent,
    UpdateComponent,
    GetAllComponent,
    FirstNameFilterPipe,
    DepartmentFilterPipe,
    DateOfBirthFilterPipe,
    SalaryFilterPipe,
    HomeComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
