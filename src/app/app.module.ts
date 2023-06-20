import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatDialogModule} from '@angular/material/dialog'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './components/popup/popup.component';
import { SigninComponent } from './components/signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './components/products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TestingComponent } from './components/testing/testing.component';
import {MatListModule} from '@angular/material/list';
import { OrderslistComponent } from './components/orderslist/orderslist.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RegisterComponent } from './components/register/register.component';
import { OrdersComponent } from './components/orders/orders.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { UserComponent } from './components/user/user.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    SigninComponent,
    ProductsComponent,
    TestingComponent,
    OrderslistComponent,
    NavbarComponent,
    CheckoutComponent,
    RegisterComponent,
    OrdersComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatBadgeModule,
    MatTabsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    ScrollingModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
