import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from '../login-page/login-page.component';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Auth } from 'src/app/models/auth/auth-model';
import { CreateUserDTO } from 'src/app/models/user/user-model';
import { tap, catchError} from 'rxjs/operators';
import { ROLE } from 'src/app/utils/enums/user.enum';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) { 

  }


  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      areaCode: [''],
      telephone: [''],
      document: [''],
      location: [''],
      province: [''],
      address: [''],
    });
  }

  registerUser(){
    const userDto = this.getUserDto();
    this.userService.createUser(userDto)
    .pipe(
      tap(response => {
        console.log('Usuario registrado', response);
        this.onClickRegister();
      }),
      catchError(error => {
        console.log('Error al registrar', error);
        throw error;
      })
    )
    .subscribe();
   
}


  getUserDto(): CreateUserDTO  {
    return {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      areaCode: this.registerForm.value.areaCode,
      telephone: this.registerForm.value.telephone,
      document: this.registerForm.value.document,
      location: this.registerForm.value.location,
      province: this.registerForm.value.province,
      address: this.registerForm.value.address,
      roleId: ROLE.CLIENT
    };
  }

  onClickRegister() {
    this.activeModal.close();
  }

  onClickClose() {
    this.activeModal.close();
  }

  onClickEnterLogin() {
    const modalRef = this.modalService.open(LoginPageComponent, { fullscreen: true });
    this.activeModal.close();
  }
}
