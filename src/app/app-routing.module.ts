import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerUpdateFormComponent } from './customer-update-form/customer-update-form.component';

const routes: Routes = [
  {
    path:"",
    component:CustomerListComponent
  },
  {
    path:"create",
    component:CustomerFormComponent
  },
  {
    path:"update/:cid",
    component:CustomerUpdateFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
