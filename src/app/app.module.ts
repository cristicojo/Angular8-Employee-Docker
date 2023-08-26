import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveComponent } from './view/save/save-component';
import { SearchComponent } from './view/search/search-component';
import { DeleteComponent } from './view/delete/delete-component';
import { UpdateComponent } from './view/update/update-component';
import { EmployeeService } from './service/employee.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GetAllComponent } from './view/get/getAll.component';


@NgModule({
  declarations: [
    AppComponent,
    SaveComponent,
    SearchComponent,
    DeleteComponent,
    UpdateComponent,
    GetAllComponent,
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
