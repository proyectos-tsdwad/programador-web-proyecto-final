import { CommonComponentsModule } from './modules/common-components/common-components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonLayoutsModule } from './modules/common-layouts/common-layouts.module';
import { PagesModule } from './pages/pages.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    CommonLayoutsModule,
    PagesModule,
    AdminModule,
    CommonComponentsModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
