import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  @Input() user:User[]=[];

  constructor(private userService:UserService) { }

  onSubmit(user: User){
    //console.log(user);
    this.userService.login(user);
  }

}
