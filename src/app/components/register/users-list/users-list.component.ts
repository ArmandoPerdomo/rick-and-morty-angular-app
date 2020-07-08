import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../core/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(
    public usersService: UserService
  ) { }

  ngOnInit(): void {
    this.usersService.usersObs.subscribe(console.log);
  }

}
