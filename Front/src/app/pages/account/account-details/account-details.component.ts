import { Component,OnInit } from '@angular/core';
import { Purchase } from 'src/app/models/user/purchase-model';
import { User } from 'src/app/models/user/user-model';
import { UserService} from 'src/app/services/user/user.service';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})


export class AccountDetailsComponent implements OnInit{
  personalData!: User;
  purchaseData!: Purchase[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    const id = 2; // Reemplaza con el email del usuario del que deseas obtener los datos personales
    this.getUserData(id);
    this.getPurchaseData();
  }

  getUserData(id: number) {
    this.userService.getPersonalData(id).subscribe(data => {
      this.personalData = data;
     console.log(this.personalData);
    });

  }

  getPurchaseData(){
    this.userService.getPurchaseHistory().subscribe(data =>{
      this.purchaseData =data ;
      console.log(this.purchaseData);
    });
  }


}
