import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterPageComponent } from '../register-page/register-page.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services//auth/auth.service';
import { Credentials } from 'src/app/models/credentials/credentials-model';
import { tap, catchError} from 'rxjs/operators';




@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  loginForm!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) { }

  
    ngOnInit(): void {
      this.createForm();
    }
  
    createForm() {
      this.loginForm = this.formBuilder.group({
        email: [''],
        password: [''],
      });
    }
  
    loginUser(){
      const credentials = this.getCredencials();
      this.authService.loginAndGet(credentials)
      .pipe(
        tap(response => {
          console.log('Usuario logueado', response);
          this.authService.updateProfileListener(response);
          this.onClickLogIn();
        }),
        catchError(error => {
          console.log('Error al ingresar', error);
          throw error;
        })
      )
      .subscribe();
     
  }
  
  
    getCredencials(): Credentials  {
      return {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
    }

  onClickLogIn() {
    this.activeModal.close();
  }

  onClickClose() {
    this.activeModal.close();
  }

  onClickEnterRegister(){
    const modalRef = this.modalService.open(RegisterPageComponent, { fullscreen: true});
    this.activeModal.close();
  }

}
