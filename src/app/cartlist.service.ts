import { Injectable } from '@angular/core';
import { Productquantity } from './productquantity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartlistService 
{
  constructor(private http:HttpClient) { }
  cartlist:Productquantity[]=[
    {
      productId:49,
      productname:'49',
      productquantity:49,
      productprice:49,
      name:"49",
      phone:"49",
      address:"49",
      orderId:49
  }
  ];
  baseurl:String = "http://localhost:8080/orders"

  getcart():Observable<any>
  {
    return this.http.get<any>(`${this.baseurl}`);
  }
  postcart(cart:Productquantity):Observable<any>
  {
    return this.http.post(`${this.baseurl}`,cart);
  }

  s:string;
  deletecart(id:number):Observable<Object>
  {
    console.log("in delete service class")
    console.log(id)
    this.s=id.toString()
    return this.http.delete(`${this.baseurl}/${id}`);
  }

  deleteallcart()
  {
    return this.http.delete(`${this.baseurl}`);
  }

  ordersurl:String = "http://localhost:8080/confirmorders"
  postorders(cart:Productquantity):Observable<any>
  {
    return this.http.post(`${this.ordersurl}`,cart);
  }

  getorder():Observable<any>
  {
    return this.http.get<any>(`${this.ordersurl}`);
  }

  deleteorder(id:number):Observable<Object>
  {
    console.log("in delete order service class")
    console.log(id)
    this.s=id.toString()
    return this.http.delete(`${this.ordersurl}/${id}`);
  }
  name:string
}