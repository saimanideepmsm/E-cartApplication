import { Component, ViewChild,OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/product';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { Productquantity } from 'src/app/productquantity';
import { CartlistService } from 'src/app/cartlist.service';
import { OrderslistComponent } from '../orderslist/orderslist.component';



@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit
{
  l:number;
  ngOnInit(): void 
  {
    this.getdata();
    this.l=this.productservice.cartlist.length;
  }
  constructor(private service:ProductsService,private dialog:MatDialog,private productservice:CartlistService){}
  products : Product[]=[]
  displayedProducts: any[] = [];
  res!:any;

  getdata()
  {
    this.service.getproducts().subscribe(data=>
      {
        this.res=data;
        this.products=data;
        console.table(data);
      })
  }

  lol:any[];
  // car:Productquantity = new Productquantity();  
  openpop(product: Product) 
  {
    const dialogRef: MatDialogRef<PopupComponent> = this.dialog.open(PopupComponent, {
      width: '400px', data:product,
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      this.res = result.quantity;
      if(this.res<1)
      {
        alert("Select atleast one product")
      }
      else{
        window.location.reload();
        console.log(this.res,"quantity in testing parent");
        this.save(this.res,product);
      }
    });
  }

  save(quant:number,product:Product)
  {
    const cart : Productquantity = new Productquantity();
    cart.productId = product.productId;
    cart.productname=product.productname;
    cart.productprice=product.productprice;
    cart.productquantity=quant;
    this.productservice.cartlist.push(cart);
    //postservice
    this.postcartlist();
    console.log(this.productservice.cartlist,"from save list andi ");
  }
  temp:any;
  postcartlist()
  {
    this.productservice.postcart(this.productservice.cartlist[this.productservice.cartlist.length-1]).subscribe(data=>
      {
        this.temp=data
      },error=>(console.log(error)))
  }

  //pagination
  currentPage: number = 1;
  itemsPerPage: number = 10;
  pageSizeOptions: number[] = [10, 20];
  onPageChange(event: any) {
    this.currentPage = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
  }
}