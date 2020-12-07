import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SaveEmployeesComponent} from "./save-employees/save-employees.component";
import {DeleteEmployeesComponent} from "./delete-employees/delete-employees.component";
import {SearchEmployeesComponent} from "./search-employees/search-employees.component";
import {UpdateEmployeesComponent} from "./update-employees/update-employees.component";


const routes: Routes = [
  {path:"Delete", component:DeleteEmployeesComponent},
  {path:"Save", component:SaveEmployeesComponent},
  {path:"Search", component:SearchEmployeesComponent},
  {path:"Update", component:UpdateEmployeesComponent},
  {path:"", redirectTo:"Save", pathMatch: "full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
