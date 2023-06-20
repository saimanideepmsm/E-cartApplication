import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartlistService } from 'src/app/cartlist.service';
import { Productquantity } from 'src/app/productquantity';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent 
{

  name:string
  address:string
  phone:string
  orderslist:Productquantity[];
  constructor(private service : CartlistService,private router:Router){}
  ngOnInit(): void 
  {
    this.getcartlist();
  }
  confirmord()
  {
    console.log(this.name,this.address,this.phone)
    //get cart list
    this.getcartlist()
    //edit cart list ie add name address and phone number of each cart
    this.editorders()
    console.log(this.orderslist,"orderslist-----------")
    this.gotoorders()
    //delete all elements of cart
    this.deletecarts()
  }

  getcartlist()
  {
    this.service.getcart().subscribe(data=>
      {
        this.orderslist=data;
      }
    )
  }

  i:number;
  editorders()
  {
    for(this.i=0;this.i<this.orderslist.length;this.i++)
    {
      this.orderslist[this.i].address=this.address
      this.orderslist[this.i].phone=this.phone
      this.orderslist[this.i].name=this.name
      // console.log(this.orderslist[this.i])
      this.postorder(this.orderslist[this.i]);
    } 
  }
  postorder(p:Productquantity)
  {
    console.log("posting data")
    this.service.postorders(p).subscribe(data=>
      {
        console.log(data)
      },error=>console.log(error))
  }

  gotoorders()
  {
    this.router.navigate(["/orders"]);
  }

  deletecarts()
  {
    this.service.deleteallcart().subscribe(data=>{
      this.getcartlist()
    },error=>console.log(error))
  }
}