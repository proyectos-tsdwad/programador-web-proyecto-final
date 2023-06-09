import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-data-form',
  templateUrl: './personal-data-form.component.html',
  styleUrls: ['./personal-data-form.component.css']
})
export class PersonalDataFormComponent {

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) { }

  onSave() {
    this.activeModal.close();
  }

  onClose() {
    this.activeModal.close();
  }

  get nombre(){
    return this.formUser.get('nombre') as FormControl;
  }

  get dni(){
    return this.formUser.get('dni') as FormControl;
  }

  get area(){
    return this.formUser.get('area') as FormControl;
  }

  get telef(){
    return this.formUser.get('telef') as FormControl;
  }

  get email(){
    return this.formUser.get('email') as FormControl;
  }



  formUser = this.formBuilder.group({
    'nombre':['',[Validators.required, Validators.minLength(5)]],
    'dni':['',[Validators.required,Validators.pattern('^[0-9]{1,3}\.?[0-9]{3,3}\.?[0-9]{3,3}$')]],
    'area':['',[Validators.required]],
    'telef':['',[Validators.required]],
    'email':['',[Validators.required, Validators.email]]

  })

  guardar(){
    console.log(this.formUser);
  }

  limpiar(){
    this.formUser.reset();
  }
}
