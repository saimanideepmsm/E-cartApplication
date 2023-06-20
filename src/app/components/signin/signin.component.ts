import { Component } from '@angular/core';
import { Customer } from 'src/app/customer';
import { CustomersService } from 'src/app/customers.service';
import { Router, convertToParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/user';
import { UserComponent } from '../user/user.component';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent 
{
  candidate:Customer = new Customer();
  frm:any;
  namo:string;
  passo:string;
  user:User = new User()
  constructor(private service:CustomersService,private router:Router)
  {
      this.frm=new FormGroup(
        {
          name: new FormControl("",[Validators.required]),
          password: new FormControl("",[Validators.required])
        }
      )
  }
  
  check()
  {
    this.user=this.frm.value
    this.getcandidate(this.user.name)
    console.log(this.name,"namo")
  }
  
  getcandidate(s:string)
  {
    this.service.getbyId(s).subscribe(data=>
      {
        this.candidate=data
        console.log(this.user.password===this.candidate.password)
        console.log(this.candidate)
        this.service.setuserdata(data);
        if(this.user.password===this.candidate.password)
        {
          // this.candidate.password
          this.router.navigate(["/home"])
          alert("logging in");  
        }
        else{
          alert("re-check your password")
        }
      },error=>console.log(error))
      console.log(this.candidate,"outside")

  }
  get name()
  {
    return this.frm.get('name');
  }

  get password()
  {
    return this.frm.get('password');
  }
}
