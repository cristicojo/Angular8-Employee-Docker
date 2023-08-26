import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SaveComponent} from './view/save/save-component';
import {DeleteComponent} from './view/delete/delete-component';
import {SearchComponent} from './view/search/search-component';
import {UpdateComponent} from './view/update/update-component';
import {GetAllComponent} from "./view/get/getAll.component";


const routes: Routes = [
  {path: 'delete', component: DeleteComponent},
  {path: 'save', component: SaveComponent},
  {path: 'search', component: SearchComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'employee-list', component: GetAllComponent},
  {path: '', redirectTo: 'save', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
