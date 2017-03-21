import { Component } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent{

  constructor(private userService:UserService) { }

  onClick() {
    this.userService.logout();
  }

}
