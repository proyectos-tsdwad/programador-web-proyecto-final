import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user-model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit{
  personalData!: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    const id = 1; // Reemplaza con el id del usuario del que deseas obtener los datos personales
    this.getUserData(id);
  }

  getUserData(id: number) {
    this.userService.getPersonalData(id).subscribe(data => {
      this.personalData = data;
     console.log(this.personalData);
    });

  }


}
