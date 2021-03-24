import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { KitchenDashboardComponent } from './kitchen-dashboard/kitchen-dashboard.component';
import { KitchenComponent } from './kitchen/kitchen.component';


const routes: Routes = [
  { path: '',   redirectTo: '/admin', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'kitchen', component: KitchenDashboardComponent},
  {path:'login',component:KitchenComponent}
];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }