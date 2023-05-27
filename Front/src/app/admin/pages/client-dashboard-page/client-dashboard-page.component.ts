import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user-model';
import { ClientService } from '../../services/client/client.service';

@Component({
  selector: 'app-client-dashboard-page',
  templateUrl: './client-dashboard-page.component.html',
  styleUrls: ['./client-dashboard-page.component.css']
})
export class ClientDashboardPageComponent implements OnInit {

  users: User[] = [];

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.clientService.getUsers()
      .subscribe((result: User[]) => {
        this.users = result;
      });
  }

}
