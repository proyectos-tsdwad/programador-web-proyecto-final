import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component'
import { HeaderComponent } from './header/header.component';
import { BookModule } from '../../modules/book/book.module';


@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BookModule
  ],
  exports: [
    HomePageComponent,
  ]
})
export class HomeModule { }
