import { Component , OnInit} from '@angular/core';
import { CartlistService } from 'src/app/cartlist.service';
import { Productquantity } from 'src/app/productquantity';

@Component({
  selector: 'app-orderslist',
  templateUrl: './orderslist.component.html',
  styleUrls: ['./orderslist.component.css']
})
export class OrderslistComponent implements OnInit
{
  m:string='manideep';
  orderslist:any[];
  displaycoloumn:string[];
  bool:boolean;
  constructor(private service:CartlistService)
  {
    // this.orderslist=this.service.cartlist;
    this.displaycoloumn =["productId","productname","productquantity","productprice","actions"];
  }
  ngOnInit(): void 
  {
    this.getcartlist();
  }

  getcartlist()
  {
    this.service.getcart().subscribe(data=>
      {
        this.orderslist=data;
        this.l=this.orderslist.length;
        if(this.l>0){
          this.bool=false;
        }
        else{
          this.bool=true;
        }
        console.log(this.bool)
      }
    )
  }
  temp:any;
  l:number;
  postcartlist()
  {
    this.service.postcart(this.service.cartlist[this.service.cartlist.length-1]).subscribe(data=>
      {
        this.temp=data
      },error=>(console.log(error)))
  }

  orderid:number;
  remove(s:any)
  {
    this.orderid=s.orderId
    console.log(this.orderid,"in remove function only");
    this.service.deletecart(this.orderid).subscribe(data=>
      {
        console.log(data);
        this.getcartlist();
      },error=>console.log(error))
  }
}
