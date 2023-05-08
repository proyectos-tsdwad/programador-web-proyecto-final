import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationbService {

  constructor(private router: Router) { }

  navigateToHome() {
    this.scrollTop();
    this.router.navigate(['/home']);
  }

  navigateToBookDetail(isbn: string) {
    this.scrollTop();
    this.router.navigate(['/book-detail', isbn]);
  }

  navigateToBookDashBoard() {
    this.scrollTop();
    this.router.navigate(['/book-dashboard']);
  }

  navigateToCheckout() {
    this.scrollTop();
    this.router.navigate(['/checkout']);
  }

  navigateToCatalogue() {
    this.scrollTop();
    this.router.navigate(['catalogue']);
  }

  navigateToCartDetail() {
    this.scrollTop();
    this.router.navigate(['cart-detail']);
  }

  navigateToProfile() {
    this.scrollTop();
    this.router.navigate(['profile']);
  }

  scrollTop() {
    window.scroll(0, 0);
  }

}
