import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterPageComponent } from '../register-page/register-page.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal
    ) { }

  onClickLogIn() {
    this.activeModal.close();
  }

  onClickClose() {
    this.activeModal.close();
  }

  onClickEnterRegister(){
    const modalRef = this.modalService.open(RegisterPageComponent, { fullscreen: true});
    this.activeModal.close();
  }

}
