import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentOrdersComponent } from './Components/current-orders/current-orders.component';
import { InvoiceGenerationComponent } from './Components/invoice-generation/invoice-generation.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { PastOrdersComponent } from './Components/past-orders/past-orders.component';
import { WashRequestsComponent } from './Components/wash-requests/wash-requests.component';
import { WasherDashboardComponent } from './Components/washer-dashboard/washer-dashboard.component';
import { WasherOrdersComponent } from './Components/washer-orders/washer-orders.component';
import { WasherProfileComponent } from './Components/washer-profile/washer-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: WasherDashboardComponent },
  { path: 'washer-profile', component: WasherProfileComponent },
  { path: 'wash-requests', component: WashRequestsComponent },
  { path: 'invoice-generation', component: InvoiceGenerationComponent },
  { path: 'washer-orders', component: WasherOrdersComponent },
  { path: 'washer-orders/current-orders', component: CurrentOrdersComponent },
  { path: 'washer-orders/past-orders', component: PastOrdersComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [WasherDashboardComponent, WasherProfileComponent, WashRequestsComponent, InvoiceGenerationComponent, WasherOrdersComponent, PageNotFoundComponent, CurrentOrdersComponent, PastOrdersComponent];
