import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 user= new User();
 msg='';
 userName: string;
  constructor(private _service : RegistrationService,private _router : Router) { }

  ngOnInit(): void {
  }

  showUser()
{
this._service.loginUserFromRemote(this.user).subscribe(
data =>
{console.log("response recieved");
name => this.changeName(name)
},
error =>
{ console.log("Exception occured");
this.msg="Please Enter valid email Id and Password";
}
);
}

  login(){
    this._router.navigate(['/login'])
  }
  private changeName(name: string): void {
    this.userName = name;
}
}
