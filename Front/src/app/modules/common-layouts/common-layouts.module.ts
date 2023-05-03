import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderMenuComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderMenuComponent,
    SearchComponent,
    NavbarComponent
  ]
})
export class CommonLayoutsModule { }
