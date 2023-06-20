import { Component, OnInit,Input } from '@angular/core';
import { CartlistService } from 'src/app/cartlist.service';
import { Productquantity } from 'src/app/productquantity';
import { FormControl,FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit
{
  @Input() l:number=0;  
  constructor(private service:CartlistService)
  {}
  orderslist:Productquantity[];
  ngOnInit(): void 
  {
    this.getcartlist();
  }
  getcartlist()
  {
    this.service.getcart().subscribe(data=>
      {
        this.orderslist=data;
        console.log(data)
      }
    )
  }
  help()
  {
    alert("contact or email this 000@mail.com")
  }
}
