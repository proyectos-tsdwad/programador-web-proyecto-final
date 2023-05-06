import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(public activeModal: NgbActiveModal) { }

  onClickLogIn() {
    this.activeModal.close();
  }

  onClickClose() {
    this.activeModal.close();
  }

}
