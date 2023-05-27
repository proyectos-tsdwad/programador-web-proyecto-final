import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user-model';
import { UserDashboardService } from '../../services/user/user-dashboard.service';

@Component({
  selector: 'app-client-dashboard-page',
  templateUrl: './client-dashboard-page.component.html',
  styleUrls: ['./client-dashboard-page.component.css']
})
export class ClientDashboardPageComponent implements OnInit {

  users: User[] = [];

  constructor(
    private UserService: UserDashboardService
  ) { }

  ngOnInit(): void {
    this.UserService.getUsers()
      .subscribe((result: User[]) => {
        this.users = result;
      });
  }

}
