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
import { OrderHistoryComponent } from './customer/order-history/order-history.component';
import { InvoiceComponent } from './customer/invoice/invoice.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { CreatePromocodeComponent } from './admin/create-promocode/create-promocode.component';
import { CreateServicesComponent } from './admin/create-services/create-services.component';
import { CreateWasherComponent } from './admin/create-washer/create-washer.component';
import { AllWasherComponent } from './admin/all-washer/all-washer.component';
import { AllCustomerComponent } from './admin/all-customer/all-customer.component';
import { PendingOrderComponent } from './admin/pending-order/pending-order.component';
import { AllOrderComponent } from './admin/all-order/all-order.component';
import { PromocodeComponent } from './admin/promocode/promocode.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { AuthGuard } from './shared/auth.guard';
import { CustomerGuard } from './shared/customer.guard';
import { AdminGuard } from './shared/admin.guard';
import { WasherGuard } from './shared/washer.guard';
import { AdminLoginComponent } from './admin.login/admin.login.component';

const routes: Routes = [
  //customer
//  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard,CustomerGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'checkout',component:CheckoutComponent,canActivate:[AuthGuard,CustomerGuard]},
  {path:'orderHistory',component:OrderHistoryComponent,canActivate:[AuthGuard,CustomerGuard]},
  {path:'invoice',component:InvoiceComponent,canActivate:[AuthGuard,CustomerGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard,CustomerGuard]},  //need to modify

  {path:'aboutUs',component:AboutUsComponent,canActivate:[AuthGuard,CustomerGuard]},
  // {path:'contactUs',component:ContactUsComponent,canActivate:[AuthGuard,CustomerGuard]},
  //admin
  {path:'adminLogin',component:AdminLoginComponent},
  {path:'adminHome',component:AdminHomeComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'adminNavbar',component:AdminNavbarComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'createPromocode',component:CreatePromocodeComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'createServices',component:CreateServicesComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'createWasher',component:CreateWasherComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'all-washer',component:AllWasherComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'all-customer',component:AllCustomerComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'pending-order',component:PendingOrderComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'all-order',component:AllOrderComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'all-promocode',component:PromocodeComponent,canActivate:[AuthGuard,AdminGuard]},
  //washer
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: WasherDashboardComponent,canActivate:[AuthGuard,WasherGuard] },
  { path: 'washer-profile', component: WasherProfileComponent,canActivate:[AuthGuard,WasherGuard] },
  { path: 'wash-requests', component: WashRequestsComponent,canActivate:[AuthGuard,WasherGuard] },
  { path: 'invoice-generation', component: InvoiceGenerationComponent,canActivate:[AuthGuard,WasherGuard]},
  { path: 'washer-orders', component: WasherOrdersComponent,canActivate:[AuthGuard,WasherGuard]},
  { path: 'washer-orders/current-orders', component: CurrentOrdersComponent,canActivate:[AuthGuard,WasherGuard] },
  { path: 'washer-orders/past-orders', component: PastOrdersComponent,canActivate:[AuthGuard,WasherGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,RegisterComponent,LoginComponent,CheckoutComponent,AboutUsComponent,
  OrderHistoryComponent,AdminHomeComponent,AdminNavbarComponent,CreatePromocodeComponent,CreateServicesComponent,CreateWasherComponent,AllWasherComponent,
  AllCustomerComponent,PendingOrderComponent,AllOrderComponent,PromocodeComponent,ProfileComponent,AdminLoginComponent,
  WasherDashboardComponent, WasherProfileComponent, WashRequestsComponent, InvoiceGenerationComponent, WasherOrdersComponent, PageNotFoundComponent, InvoiceComponent]

export const routingComponent = [WasherDashboardComponent, WasherProfileComponent, WashRequestsComponent, InvoiceGenerationComponent, WasherOrdersComponent, PageNotFoundComponent, CurrentOrdersComponent, PastOrdersComponent];
