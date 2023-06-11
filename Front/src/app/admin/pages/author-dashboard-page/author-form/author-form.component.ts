import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { AuthorDashboardService } from 'src/app/admin/services/author/author-dashboard.service';
import { Author, createAuthorDTO } from 'src/app/models/author/author-model';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent {


  @Input() authorId: string | number = '';
  @Input() action: 'create' | 'edit' | 'delete' = 'create';

  newAuthor!: createAuthorDTO;
  auhtorForm!: FormGroup;
  author!: Author;

  isDeleteForm: boolean = false


  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private authorService: AuthorDashboardService,
  ) { }

  ngOnInit(): void {
    this.isDeleteForm = this.action === 'delete';

    this.createForm();

    if (this.authorId) {
      this.getAuthorById();
    }
  }

  getAuthorById() {
    this.authorService.getAuthorById(this.authorId)
      .subscribe((result: Author) => {
        this.author = result;
        this.auhtorForm.get('name')?.setValue(this.author.name);
      });
  }

  onSaveHandle(event: Event) {
    event.preventDefault;

    if (this.action === 'create') {
      this.saveNewAuthor();
    }

    if (this.action === 'edit') {
      this.saveUpdateAuthor();
    }
  }

  saveNewAuthor() {

    this.newAuthor = {
      name: this.name,
    }

    this.authorService.saveAuthor(this.newAuthor)
      .subscribe((result: Author) => {
        let author: Author = result;

        if (author) {
          this.activeModal.close(true);
        }
      });
  }

  saveUpdateAuthor() {

    this.author.name = this.name;

    this.authorService.updateAuthor(this.author)
      .subscribe((result: Author) => {
        let author: Author = result;

        if (author) {
          this.activeModal.close(true);
        }
      });
  }

  onConfirmDelete() {
    this.authorService.deleteAuthor(this.authorId)
      .subscribe(() => {
        this.activeModal.close(true);
      });

  }

  onClose() {
    this.activeModal.close(false);
  }

  createForm() {
    this.auhtorForm = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  get name() {
    return this.auhtorForm.value.name as string;
  }

}
