import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService 
{

  constructor(private http:HttpClient) { }

  baseurl:String = "http://localhost:8080/product"

  getproducts():Observable<any>
  {
    return this.http.get<any>(`${this.baseurl+"s"}`);
  }
}