import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user'

@Injectable()
export class UserService {

user:User[] = [new User('test','test')];
private authenticatedUser;

  constructor(private router:Router) { }

  login(value){
    this.authenticatedUser = this.user.find(u => u.username === value.username);
    if (this.authenticatedUser && this.authenticatedUser.password === value.password){
      localStorage.setItem("login_user", JSON.stringify(this.authenticatedUser));
      this.router.navigate(['dashboard']);      
      return true;
    }
    return false; 
  }

  logout() {
    localStorage.removeItem("login_user");
    this.router.navigate(['']);
  }

  checkLoginStatus(){
    if (localStorage.getItem("login_user") === null){
        this.router.navigate(['']);
    }else{
      this.router.navigate(['dashboard']);
    }
  } 
}
