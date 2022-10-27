import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentOrdersComponent } from './Components/current-orders/current-orders.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CheckoutComponent } from './customer/checkout/checkout.component';
import { HomeComponent } from './customer/home/home.component';
import { InvoiceGenerationComponent } from './Components/invoice-generation/invoice-generation.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { PastOrdersComponent } from './Components/past-orders/past-orders.component';
import { WashRequestsComponent } from './Components/wash-requests/wash-requests.component';
import { WasherDashboardComponent } from './Components/washer-dashboard/washer-dashboard.component';
import { WasherOrdersComponent } from './Components/washer-orders/washer-orders.component';
import { WasherProfileComponent } from './Components/washer-profile/washer-profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OrderHistoryComponent } from './customer/order-history/order-history.component';
import { InvoiceComponent } from './customer/invoice/invoice.component';

const routes: Routes = [
  //customer
//  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'orderHistory',component:OrderHistoryComponent},
  {path:'invoice',component:InvoiceComponent},

  {path:'aboutUs',component:AboutUsComponent},
  {path:'contactUs',component:ContactUsComponent},

  //washer
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
export const routingComponents=[HomeComponent,RegisterComponent,LoginComponent,CheckoutComponent,ContactUsComponent,AboutUsComponent,
  OrderHistoryComponent,
  WasherDashboardComponent, WasherProfileComponent, WashRequestsComponent, InvoiceGenerationComponent, WasherOrdersComponent, PageNotFoundComponent]

export const routingComponent = [WasherDashboardComponent, WasherProfileComponent, WashRequestsComponent, InvoiceGenerationComponent, WasherOrdersComponent, PageNotFoundComponent, CurrentOrdersComponent, PastOrdersComponent];
