import { Component ,OnInit} from '@angular/core';
import { CustomersService } from 'src/app/customers.service';
import { Customer } from 'src/app/customer';
import { OrderslistComponent } from '../orderslist/orderslist.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit
{
  constructor(private service:CustomersService){}
  usr:any;
  ngOnInit(): void 
  {
    this.usr=this.service.getuserdata()
  }
  user:Customer;
  id:string;
  getuser()
  {
    console.log(this.id)
    this.service.getbyId(this.id).subscribe(data=>{
      this.user=data;
      console.log(data)
    })
  }
}