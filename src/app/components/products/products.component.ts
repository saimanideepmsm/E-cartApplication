import { AfterViewInit, Component, EventEmitter, OnInit,Output,ViewChild } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/services/products.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator,PageEvent} from '@angular/material/paginator';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { Productquantity } from 'src/app/productquantity';
import { CartlistService } from 'src/app/cartlist.service';
import { OrderslistComponent } from '../orderslist/orderslist.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit
{
  res!:any;
  products:Product[];
  
  dataSource:MatTableDataSource<any>;
  paginator:MatPaginator;
  @ViewChild(MatPaginator) set matPaginator(mp:MatPaginator)
  {
    this.paginator=mp;
    this.dataSource.paginator=this.paginator
  }
  constructor(private service:ProductsService,private dialog:MatDialog,private productservice:CartlistService){}
  displaycoloumn:string[]=["productId","productname","productrating","productprice"]

  ngOnInit(): void 
  {
    this.getdata();
    this.displaycoloumn =["productId","producturl","productname","productrating","productprice","actions"];
  }
  getdata()
  {
    this.service.getproducts().subscribe(data=>
      {
        this.res=data;
        this.products=data;
        this.dataSource= new MatTableDataSource(this.products);
        this.dataSource.paginator=this.paginator
        console.table(data);
      })
  }

  // goToPreviousPage() {
  //   if (this.paginator.hasPreviousPage()) {
  //     this.paginator.previousPage();
  //   }
  // }
  
  // goToNextPage() {
  //   if (this.paginator.hasNextPage()) {
  //     this.paginator.nextPage();
  //   }
  // }
  
  // onPageChange(event: PageEvent) 
  // {
  //   this.dataSource.paginator = this.paginator;
  // }
 
  openpop(product: Product) 
  {
    const dialogRef: MatDialogRef<PopupComponent> = this.dialog.open(PopupComponent, {
      width: '400px', data:product,
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      this.res = result.quantity;
      //emit
      if(this.res<1)
      {
        alert("Select atleast one item")
      }
      else{
        window.location.reload();
        console.log(this.res,"quantity in testing parent");
        this.save(this.res,product);
        //emit
      }
    });
  }

  save(quant:number,product:Product)
  {
    const cart : Productquantity = new Productquantity();
    cart.productId = product.productId;
    cart.productname=product.productname;
    cart.productquantity=quant;
    cart.productprice=product.productprice;
    this.productservice.cartlist.push(cart);
    this.postcartlist();
    console.log(this.productservice.cartlist,"from save grid andi ");
  }
  temp:any;
  postcartlist()
  {
    this.productservice.postcart(this.productservice.cartlist[this.productservice.cartlist.length-1]).subscribe(data=>
      {
        this.temp=data
      },error=>(console.log(error)))
  }

  currentPage: number = 1;
  itemsPerPage: number = 10;
  pageSizeOptions: number[] = [10, 20];
  onPageChange(event: any) {
    this.currentPage = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
  }
}