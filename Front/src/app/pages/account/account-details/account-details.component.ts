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
    this.authService.getProfileListener().subscribe((profile: User | null) => {
      if (profile) {
        this.profile = { ...profile };
      }
    });
  }

  ngOnDestroy(): void {
    this.userDataSub.unsubscribe();
  }

  getUserData() {
    this.userDataSub = this.authService.getProfileListener()
    .subscribe(user => {
      console.log('Get usuario', user)
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
    modalRef.componentInstance.addressData = { ...this.profile };
    console.log('Addres form',this.profile)
    modalRef.componentInstance.addressUpdated.subscribe((updateData: User) => {
      this.profile = { ...updateData };
      console.log('Put address usuario', this.profile)
      this.authService.updateProfileListener(this.profile);
    });
  }

  onEditPersonalData() {
    const modalRef = this.modalService.open(PersonalDataFormComponent, {
      size: 'lg',
      centered: true,
    });
    console.log(this.profile);
    modalRef.componentInstance.Data = { ...this.profile };
    modalRef.componentInstance.dataUpdated.subscribe((updateData: User) => {
      this.profile = { ...updateData };
      console.log('Put usuario', this.profile)
      this.authService.updateProfileListener(this.profile);
    });
  }

}
