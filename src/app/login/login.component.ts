import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user = new User();
   msg = '';

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  
loginUser()
{
this._service.loginUserFromRemote(this.user).subscribe(
data =>
{console.log("response recieved");
this._router.navigate(['/loginsuccess'])
},
error =>
{ console.log("Exception occured");
this.msg="Please Enter valid email Id and Password";
}
);
}

gotoregistration()
{
  this._router.navigate(['/registration'])
}
}
