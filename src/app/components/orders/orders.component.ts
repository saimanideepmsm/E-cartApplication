import { Component, OnInit } from '@angular/core';
import { CartlistService } from 'src/app/cartlist.service';
import { Productquantity } from 'src/app/productquantity';
import { OrderslistComponent } from '../orderslist/orderslist.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit
{
  orderslist:Productquantity[];
  displaycoloumn:string[]
  len:number;
  constructor(private service:CartlistService)
  {
    this.displaycoloumn =["orderId","name","address","phone","productId","productname","productquantity","productprice","actions"];

  }
  ngOnInit(): void 
  {
    this.getorder()
  }
  getorder()
  {
    this.service.getorder().subscribe(data=>
      {
        console.log(data,"orders");
        this.orderslist=data;
      },error=>console.log(error))
  }

  deleteorder(id:number)
  {
    this.service.deleteorder(id).subscribe(data=>
      {
        console.log(data)
        this.getorder()
      },error=>console.log(error))
  }
}