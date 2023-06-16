import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from '../../login/login-page/login-page.component';
import { RegisterPageComponent } from '../../login/register-page/register-page.component';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { AdminNavigationService } from 'src/app/admin/services/navigation/navigation.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Auth } from 'src/app/models/auth/auth-model';
import { User } from 'src/app/models/user/user-model';
import { Credentials } from 'src/app/models/credentials/credentials-model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  profile: User | null = null;
  @Input() isAdmin = false;

  constructor(
    private modalService: NgbModal,
    private navigationService: NavigationService,
    private AdminNavigationService: AdminNavigationService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getProfile();
  }

  onClickLogIn() {
    const modalRef = this.modalService.open(LoginPageComponent, {
      fullscreen: true,
    });
  }

  onClickRegister() {
    const modalRef = this.modalService.open(RegisterPageComponent, {
      fullscreen: true,
    });
  }

  onClickNavigateToHome() {
    this.navigationService.navigateToHome();
  }

  onClickNavigateToCatalogue() {
    this.navigationService.navigateToCatalogue();
  }

  onClickNavigateToBookDashboard() {
    this.AdminNavigationService.navigateToBookDashboard();
  }

  onClickNavigateToSalesDashboard() {
    this.AdminNavigationService.navigateToSalesDashboard();
  }

  onClickNavigateToClientDashboard() {
    this.AdminNavigationService.navigateToClientDashboard();
  }

  getProfile() {
    this.authService.getProfileListener().subscribe((user) => {
      this.profile = user;
    });
  }

  onProfile() {
    this.navigationService.navigateToProfile();
  }

  onLogout() {
    //TODO LOGOUT
    this.navigationService.navigateToHome();
  }

  logout() {
    this.authService.logoutUser().subscribe((response: boolean) => {
      if (!response) {
        return;
      }
      this.authService.clearProfile();
    });
  }
}
