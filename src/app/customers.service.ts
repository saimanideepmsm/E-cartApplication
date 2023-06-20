import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http:HttpClient) { }
  baseurl:String = "http://localhost:8080/customers"
  postcustomer(customer:Customer)
  {
    console.log("entered post function")
    return this.http.post(`${this.baseurl}`,customer);
  }

  getbyId(id:string):Observable<Customer>
  {
    console.log("entered get function")
    return this.http.get<Customer>(`${this.baseurl}/${id}`)
  }

  private localStorageKey = "userdata";

  setuserdata(data:any)
  {
    localStorage.setItem(this.localStorageKey,JSON.stringify(data))
  }

  getuserdata()
  {
    const storeddata = localStorage.getItem(this.localStorageKey);
    return storeddata? JSON.parse(storeddata):null;
  }

  clearuserdata()
  {
    localStorage.removeItem(this.localStorageKey)
  }

}