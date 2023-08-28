import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SaveComponent} from './view/save/save-component';
import {DeleteComponent} from './view/delete/delete-component';
import {UpdateComponent} from './view/update/update-component';
import {GetAllComponent} from "./view/get/getAll.component";
import {HomeComponent} from "./view/home/home.component";


const routes: Routes = [
  {path: 'delete-all', component: DeleteComponent},
  {path: 'save', component: SaveComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'employee-list', component: GetAllComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
