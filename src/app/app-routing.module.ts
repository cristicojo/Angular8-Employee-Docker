import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SaveEmployeesComponent} from './save-employees/save-employees.component';
import {DeleteEmployeesComponent} from './delete-employees/delete-employees.component';
import {SearchEmployeesComponent} from './search-employees/search-employees.component';
import {UpdateEmployeesComponent} from './update-employees/update-employees.component';


const routes: Routes = [
  {path: 'delete', component: DeleteEmployeesComponent},
  {path: 'save', component: SaveEmployeesComponent},
  {path: 'search', component: SearchEmployeesComponent},
  {path: 'update', component: UpdateEmployeesComponent},
  {path: '', redirectTo: 'save', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
