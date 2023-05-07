import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from '../../login/login-page/login-page.component';
import { RegisterPageComponent } from '../../login/register-page/register-page.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(private modalService: NgbModal) { }

  onClickLogIn() {
    const modalRef = this.modalService.open(LoginPageComponent, { fullscreen: true});
  }

  onClickRegister() {
    const modalRef = this.modalService.open(RegisterPageComponent, { fullscreen: true });
  }
}
