import { Component, Input } from '@angular/core';
import { Publisher, createPublisherDTO } from 'src/app/models/publisher/publisher-model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { AuthorDashboardService } from 'src/app/admin/services/author/author-dashboard.service';
import { PublisherDashboardService } from 'src/app/admin/services/publisher/publisher-dashboard.service';

@Component({
  selector: 'app-publisher-form',
  templateUrl: './publisher-form.component.html',
  styleUrls: ['./publisher-form.component.css']
})
export class PublisherFormComponent {

  @Input() publisherId: string | number = '';
  @Input() action: 'create' | 'edit' | 'delete' = 'create';

  newPublisher!: createPublisherDTO;
  publisherForm!: FormGroup;
  publisher!: Publisher;

  isDeleteForm: boolean = false


  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private publisherService: PublisherDashboardService,
  ) { }

  ngOnInit(): void {
    this.isDeleteForm = this.action === 'delete';

    this.createForm();

    if (this.publisherId) {
      this.getPublisherById();
    }
  }

  getPublisherById() {
    this.publisherService.getPublisherById(this.publisherId)
      .subscribe((result: Publisher) => {
        this.publisher = result;
        this.publisherForm.get('name')?.setValue(this.publisher.name);
      });
  }

  onSaveHandle(event: Event) {
    event.preventDefault;

    if (this.action === 'create') {
      this.saveNewPublisher();
    }

    if (this.action === 'edit') {
      this.saveUpdatePublisher();
    }
  }

  saveNewPublisher() {

    this.newPublisher = {
      name: this.name,
    }

    this.publisherService.savePublisher(this.newPublisher)
      .subscribe((result: Publisher) => {
        let author: Publisher = result;

        if (author) {
          this.activeModal.close(true);
        }
      });
  }

  saveUpdatePublisher() {

    this.publisher.name = this.name;

    this.publisherService.updatePublisher(this.publisher)
      .subscribe((result: Publisher) => {
        let author: Publisher = result;

        if (author) {
          this.activeModal.close(true);
        }
      });
  }

  onConfirmDelete() {
    this.publisherService.deletePublisher(this.publisherId)
      .subscribe(() => {
        this.activeModal.close(true);
      });

  }

  onClose() {
    this.activeModal.close(false);
  }

  createForm() {
    this.publisherForm = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  get name() {
    return this.publisherForm.value.name as string;
  }
}
