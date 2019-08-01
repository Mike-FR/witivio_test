import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPumpComponent } from './admin/admin-pump/admin-pump.component';
import { BeerPumpComponent } from './beer-pump/beer-pump.component';

const routes: Routes = [
  { path: '', component: BeerPumpComponent },
  { path: 'admin', component: AdminPumpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
