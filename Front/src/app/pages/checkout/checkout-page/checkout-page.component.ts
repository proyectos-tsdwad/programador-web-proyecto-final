import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS, } from '@angular/cdk/stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  stepperOrientation: Observable<StepperOrientation>;
  icons = [
    './assets/img/stepper/Camion.png',
    'icono-2',
    'icono-3'];

  constructor(
    private _formBuilder: FormBuilder,
    private navigationService: NavigationService,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical'))
      );

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  onClickBackToCart() {
    this.navigationService.navigateToCartDetail();
  }

  onClickBackToCatalogue() {
    this.navigationService.navigateToCatalogue();
  }
}
