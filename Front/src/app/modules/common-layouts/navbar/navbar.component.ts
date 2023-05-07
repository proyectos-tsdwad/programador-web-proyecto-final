import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from '../../login/login-page/login-page.component';
import { RegisterPageComponent } from '../../login/register-page/register-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private modalService: NgbModal, private router: Router) { }

  onClickLogIn() {
    const modalRef = this.modalService.open(LoginPageComponent, { fullscreen: true });
  }

  onClickRegister() {
    const modalRef = this.modalService.open(RegisterPageComponent, { fullscreen: true });
  }

  onClickNavigateToHome() {
    this.router.navigate(['home']);
  }

  onClickNavigateToCatalogue() {
    this.router.navigate(['home']);
  }
}
