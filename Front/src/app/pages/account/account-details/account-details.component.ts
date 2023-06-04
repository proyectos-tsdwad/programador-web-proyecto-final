import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/models/user/purchase-model';
import { User } from 'src/app/models/user/user-model';
import { UserService } from 'src/app/services/user/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressFormComponent } from '../address-form/address-form.component';
import { PersonalDataFormComponent } from '../personal-data-form/personal-data-form.component';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})


export class AccountDetailsComponent implements OnInit {
  personalData!: User;
  purchaseData!: Purchase[];

  constructor(
    private userService: UserService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    const id = 1; // Reemplaza con el email del usuario del que deseas obtener los datos personales
    this.getUserData(id);
    this.getPurchaseData();
  }

  getUserData(id: number) {
    this.userService.getPersonalData(id).subscribe(data => {
      this.personalData = data;
    });

  }

  getPurchaseData() {
    this.userService.getPurchaseHistory().subscribe(data => {
      this.purchaseData = data;
      console.log(this.purchaseData);
    });
  }

  onEditAddress() {
    const modalRef = this.modalService.open(AddressFormComponent, { size: 'lg', centered: true });
  }

  onEditPersonalData() {
    const modalRef = this.modalService.open(PersonalDataFormComponent, { size: 'lg', centered: true });
  }

}
