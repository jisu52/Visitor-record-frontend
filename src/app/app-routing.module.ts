import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { CreateVisitorComponent } from './create-visitor/create-visitor.component';
import { UpdateVisitorComponent } from './update-visitor/update-visitor.component';
import { VisitorDetailsComponent } from './visitor-details/visitor-details.component';

const routes: Routes = [
  {path:'visitors', component: VisitorListComponent},
  {path: "create-visitor", component: CreateVisitorComponent},
  {path: "update-visitor/:id", component: UpdateVisitorComponent},
  {path: "", redirectTo:"visitors", pathMatch:"full" },
  {path: "visitor-details/:id", component: VisitorDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
