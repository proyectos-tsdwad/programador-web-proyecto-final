import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonComponentsModule } from "../common-components/common-components.module";
import { LoginModule } from '../login/login.module';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderMenuComponent,
    SearchComponent,
    NavbarComponent
    ],
  exports: [
    FooterComponent,
    HeaderMenuComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LoginModule,
    CommonComponentsModule
  ]
})
export class CommonLayoutsModule { }
