import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatBadgeModule } from '@angular/material/badge';

import { FooterComponent } from './footer/footer.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginModule } from '../login/login.module';
import { ButtonCartComponent } from './button-cart/button-cart.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderMenuComponent,
    SearchComponent,
    NavbarComponent,
    ButtonCartComponent
  ],
  imports: [
    CommonModule,
    LoginModule,
    MatBadgeModule
  ],
  exports: [
    FooterComponent,
    HeaderMenuComponent,
    NavbarComponent
  ]
})
export class CommonLayoutsModule { }
