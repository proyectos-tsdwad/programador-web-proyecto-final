import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  
  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal) { }

  onClickRegister() {
    this.activeModal.close();
  }

  onClickClose() {
    this.activeModal.close();
  }

  onClickEnterLogin(){
    const modalRef = this.modalService.open(LoginPageComponent, { fullscreen: true});
    this.activeModal.close();
  }
}
