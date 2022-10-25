import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CheckoutComponent } from './customer/checkout/checkout.component';
import { HomeComponent } from './customer/home/home.component';
import { InvoiceGenerationComponent } from './Components/invoice-generation/invoice-generation.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { WashRequestsComponent } from './Components/wash-requests/wash-requests.component';
import { WasherDashboardComponent } from './Components/washer-dashboard/washer-dashboard.component';
import { WasherOrdersComponent } from './Components/washer-orders/washer-orders.component';
import { WasherProfileComponent } from './Components/washer-profile/washer-profile.component';

const routes: Routes = [
  //customer
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'checkout',component:CheckoutComponent},

  //washer
  {path : '',redirectTo : '/dashboard', pathMatch : 'full'},
  {path : 'dashboard', component : WasherDashboardComponent},
  {path : 'washer-profile', component : WasherProfileComponent},
  {path : 'wash-requests', component : WashRequestsComponent},
  {path : 'invoice-generation', component : InvoiceGenerationComponent},
  {path : 'washer-orders', component : WasherOrdersComponent},
  {path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,RegisterComponent,LoginComponent,CheckoutComponent,
  WasherDashboardComponent, WasherProfileComponent, WashRequestsComponent, InvoiceGenerationComponent, WasherOrdersComponent, PageNotFoundComponent]

