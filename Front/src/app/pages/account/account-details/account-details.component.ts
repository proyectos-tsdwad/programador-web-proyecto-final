import { Component, OnInit, OnDestroy } from '@angular/core';
import { Purchase } from 'src/app/models/user/purchase-model';
import { CreateUserDTO, User } from 'src/app/models/user/user-model';
import { UserService } from 'src/app/services/user/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressFormComponent } from '../address-form/address-form.component';
import { PersonalDataFormComponent } from '../personal-data-form/personal-data-form.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})


export class AccountDetailsComponent implements OnInit, OnDestroy {
  personalData!: CreateUserDTO;
  purchaseData!: Purchase[];
  profile: User | null = null;
  userDataSub!: Subscription

  constructor(
    private userService: UserService,
    private modalService: NgbModal,
    private authService: AuthService

  ) { }
  

  ngOnInit() {
    this.getUserData();
    this.getPurchaseData();
  }

  ngOnDestroy(): void {
    this.userDataSub.unsubscribe();
  }

  getUserData() {
    this.userDataSub = this.authService.getProfileListener()
    .subscribe(user => {
      console.log('usuario', user)
      this.profile = user;
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
