import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router
  ) { }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToBookDetail(isbn: string) {
    this.router.navigate(['/book-detail', isbn]);
  }

  navigateToBookDashBoard() {
    this.router.navigate(['/book-dashboard']);
  }

  navigateToCheckout() {
    this.router.navigate(['/checkout']);
  }

  navigateToCatalogue() {
    this.router.navigate(['catalogue']);
  }

  navigateToCartDetail() {
    this.router.navigate(['cart-detail']);
  }

  navigateToProfile() {
    this.router.navigate(['profile']);
  }

  navigateToSearchBook() {
    this.router.navigate(['book-search']);
  }
}
