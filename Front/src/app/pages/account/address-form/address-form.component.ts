import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {

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

  get calle(){
    return this.formUser.get('calle') as FormControl;
  }

  get cp(){
    return this.formUser.get('cp') as FormControl;
  }

  get localidad(){
    return this.formUser.get('localidad') as FormControl;
  }

  get provincia(){
    return this.formUser.get('provincia') as FormControl;
  }


  formUser = this.formBuilder.group({
    'calle':['',[Validators.required]],
    'cp':['',[Validators.required]],
    'localidad':['',[Validators.required]],
    'provincia':['',[Validators.required]]

  })


}
