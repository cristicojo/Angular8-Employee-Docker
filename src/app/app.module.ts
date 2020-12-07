import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveEmployeesComponent } from './save-employees/save-employees.component';
import { SearchEmployeesComponent } from './search-employees/search-employees.component';
import { DeleteEmployeesComponent } from './delete-employees/delete-employees.component';
import { UpdateEmployeesComponent } from './update-employees/update-employees.component';
import { EmployeesServiceService } from './employees-service.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    SaveEmployeesComponent,
    SearchEmployeesComponent,
    DeleteEmployeesComponent,
    UpdateEmployeesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
