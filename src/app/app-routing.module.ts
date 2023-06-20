import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopupComponent } from './components/popup/popup.component';
import { ProductsComponent } from './components/products/products.component';
import { TestingComponent } from './components/testing/testing.component';
import { OrderslistComponent } from './components/orderslist/orderslist.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = 
[
  {path:"addtocard", component:PopupComponent},
  {path:"listview", component:ProductsComponent},
  {path:"", redirectTo:'signin', pathMatch:'full'},
  {path:"gridview", component:TestingComponent},
  {path:"cart", component:OrderslistComponent},
  {path:"orders", component:OrdersComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"signin", component:SigninComponent},
  {path:"register", component:RegisterComponent},
  {path:"user", component:UserComponent},
  {path:"home", component:HomeComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
