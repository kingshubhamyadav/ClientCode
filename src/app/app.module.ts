import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { NavbarComponent } from './customer/navbar/navbar.component';
import { FooterComponent } from './customer/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';

import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { routingComponent } from './app-routing.module';
import { WashRequestsComponent } from './Components/wash-requests/wash-requests.component';
import { InvoiceGenerationComponent } from './Components/invoice-generation/invoice-generation.component';
import { WasherOrdersComponent } from './Components/washer-orders/washer-orders.component';
import { WasherProfileComponent } from './Components/washer-profile/washer-profile.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { CurrentOrdersComponent } from './Components/current-orders/current-orders.component';
import { PastOrdersComponent } from './Components/past-orders/past-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    routingComponents,
    routingComponent,
    WashRequestsComponent,
    InvoiceGenerationComponent,
    WasherOrdersComponent,
    WasherProfileComponent,
    PageNotFoundComponent,
    CurrentOrdersComponent,
    PastOrdersComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
