import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
  NgForm,
} from '@angular/forms';
import { Observable, map } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { regExEmail, regExExpirationDate, regExOnlyNumbers } from 'src/app/utils/regex/regex';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
})
export class CheckoutPageComponent {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup: FormGroup;
  stepperOrientation: Observable<StepperOrientation>;
  icons = ['./assets/img/stepper/Camion.png', 'icono-2', 'icono-3'];

  errorMessages = {
    name: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'maxlength', message: 'Por favor ingresá un máximo de 80 caracteres.' }
    ],
    document: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'minlength', message: 'Mínimo 7 dígitos' },
      { type: 'maxlength', message: 'Máximo 8 dígitos.' },
      { type: 'pattern', message: 'Ingresa sólo números.' }
    ],
    areaCode: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'minlength', message: 'Mínimo 2 dígitos' },
      { type: 'maxlength', message: 'Máximo 5 dígitos.' },
      { type: 'pattern', message: 'Ingresa sólo números.' }
    ],
    telephone: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'minlength', message: 'Mínimo 6 dígitos' },
      { type: 'maxlength', message: 'Máximo 8 dígitos.' },
      { type: 'pattern', message: 'Ingresa sólo números.' }
    ],
    location: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'maxlength', message: 'Por favor ingresá un máximo de 50 caracteres.' }
    ],
    province: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'maxlength', message: 'Por favor ingresá un máximo de 50 caracteres.' }
    ],
    address: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'maxlength', message: 'Por favor ingresá un máximo de 80 caracteres.' }
    ],
    postalCode: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'minlength', message: 'Mínimo 4 dígitos' },
      { type: 'maxlength', message: 'Máximo 4 dígitos.' },
      { type: 'pattern', message: 'Ingresa sólo números.' }
    ],
    email: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'maxlength', message: 'Por favor ingresá un máximo de 80 caracteres.' },
      { type: 'pattern', message: 'Ingresa un email válido.' }
    ],
    cardName: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'maxlength', message: 'Por favor ingresá un máximo de 80 caracteres.' }
    ],
    cardNumber: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'minlength', message: 'Mínimo 13 dígitos' },
      { type: 'maxlength', message: 'Máximo 18 dígitos' }
    ],
    expirationDate: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'pattern', message: 'Ingresa una fecha válida.' }
    ],
    cvv: [
      { type: 'required', message: 'Campo requerido.' },
      { type: 'minlength', message: 'Mínimo 3 dígitos' },
      { type: 'maxlength', message: 'Máximo 4 dígitos' }
    ],
  };

  constructor(
    private _formBuilder: FormBuilder,
    private navigationService: NavigationService,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));

    this.createFirstForm();
    this.createSecondForm();

    

    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  createFirstForm(){
    this.firstFormGroup = this._formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(80)]],
      email: ['', [Validators.required, Validators.maxLength(80), Validators.pattern(regExEmail)]],
      areaCode: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5), Validators.pattern(regExOnlyNumbers)]],
      telephone: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8), Validators.pattern(regExOnlyNumbers)]],
      document: ['',[ Validators.required, Validators.minLength(7), Validators.maxLength(8), Validators.pattern(regExOnlyNumbers)]],
      location: ['', [Validators.required, Validators.maxLength(50)]],
      province: ['', [Validators.required, Validators.maxLength(50)]],
      address: ['', [Validators.required, Validators.maxLength(80)]],
      postalCode: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(regExOnlyNumbers)]]
    });
  }

  createSecondForm(){
    this.secondFormGroup = this._formBuilder.group({
      cardName: ['', [Validators.required, Validators.maxLength(80)]],
      cardNumber: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(18)]],
      expirationDate: ['', [Validators.required, Validators.pattern(regExExpirationDate)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]],
    });
  }

  checkoutFormValid(event: Event){
  event.preventDefault;
  
  if(!this.firstFormGroup.valid || !this.secondFormGroup.valid){
    
    this.firstFormGroup.markAllAsTouched();
    this.secondFormGroup.markAllAsTouched();
    return
  }



}

  get name() {
    return this.firstFormGroup.get('name');
  }
  
  get document() {
    return this.firstFormGroup.get('document');
  }
  
  get areaCode() {
    return this.firstFormGroup.get('areaCode');
  }
  
  get telephone() {
    return this.firstFormGroup.get('telephone');
  }
  
  get location() {
    return this.firstFormGroup.get('location');
  }
  
  get province() {
    return this.firstFormGroup.get('province');
  }
  
  get address() {
    return this.firstFormGroup.get('address');
  }
  
  get postalCode() {
    return this.firstFormGroup.get('postalCode');
  }
  
  get email() {
    return this.firstFormGroup.get('email');
  }

  get cardName() {
    return this.secondFormGroup.get('cardName');
  }
  
  get cardNumber() {
    return this.secondFormGroup.get('cardNumber');
  }
  
  get expirationDate() {
    return this.secondFormGroup.get('expirationDate');
  }

  get cvv() {
    return this.secondFormGroup.get('cvv');
  }
  

  onClickBackToCart() {
    this.navigationService.navigateToCartDetail();
  }

  onClickBackToCatalogue() {
    this.navigationService.navigateToCatalogue();
  }
}
