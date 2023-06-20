import { Component } from '@angular/core';
import { CustomersService } from 'src/app/customers.service';
import { Customer } from 'src/app/customer';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent 
{
  // name:string;
  // password1:string
  // password2:string
  // phone:string
  p2:string;
  p1:string;
  candidate:Customer = new Customer();
  frm:any;
  constructor(private service:CustomersService,private router:Router)
  {
    this.frm=new FormGroup(
      {
        name: new FormControl("",[Validators.required]),
        password1: new FormControl("",[Validators.required]),
        password2: new FormControl("",[Validators.required]),
        phone: new FormControl("",[Validators.required])
      }
    )
  }

  get name()
  {
    return this.frm.get("name")
  }

  get password1()
  {
    return this.frm.get("password1")
  }

  get password2()
  {
    return this.frm.get("password2")
  }

  get phone()
  {
    return this.frm.get("phone")
  }

  register()
  {
    console.log(this.frm.value.password1)
    this.p1=this.frm.value.password1
    this.p2=this.frm.value.password2
    console.log(this.p1===this.p2)
    if(this.p1===this.p2)
    {
      alert("successfully registered")
      this.candidate.name=this.frm.value.name
      this.candidate.phone=this.frm.value.phone
      this.candidate.password=this.frm.value.password1
      console.log(this.candidate)
      this.postdata(this.candidate)
      this.router.navigate(["/signin"])
    }
    else
    {
      alert("passwords doesnt match")
    }
}

  postdata(c:Customer)
  {
    this.service.postcustomer(c).subscribe(data=>{
      console.log("uploaded")
      console.log(data)
    },error=>console.log(error))
  }

}
