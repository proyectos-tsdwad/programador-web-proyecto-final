import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Book, CreateBookDto } from 'src/app/models/book/book-model';
import { BookDashboardService } from 'src/app/admin/services/book/book-dashboard.service';
import { Author } from 'src/app/models/author/author-model';
import { Publisher } from 'src/app/models/publisher/publisher-model';
import { AuthorDashboardService } from 'src/app/admin/services/author/author-dashboard.service';
import { PublisherDashboardService } from 'src/app/admin/services/publisher/publisher-dashboard.service';
import { GenreDashboardService } from 'src/app/admin/services/genre/genre-dashboard.service';
import { Genre } from 'src/app/models/genre/genre-model';
import { map } from 'rxjs/operators'



@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Input() bookIsbn: string = '';
  @Input() action: 'view' | 'create' | 'edit' | 'delete' = 'create';

  book!: CreateBookDto;
  bookForm!: FormGroup;
  selectedGenres: number[] = [];
  authors: Author[] = [];
  publishers: Publisher[] = [];
  genres: Genre[] = [];

  formEnable: boolean = true;
  isDeleteForm: boolean = false


  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private bookService: BookDashboardService,
    private authorService: AuthorDashboardService,
    private publisherService: PublisherDashboardService,
    private genreService: GenreDashboardService,
  ) { }

  ngOnInit(): void {
    this.formEnable = this.action !== 'view';
    this.isDeleteForm = this.action === 'delete';

    this.createForm();
    this.getAuthors();
    this.getPublishers();
    this.getGenres();


    if (this.bookIsbn) {
      this.getByIsbn();
    }
  }

  getByIsbn() {
    this.bookService.getBookByIsbn(this.bookIsbn)
      .pipe(map((result: Book) => {
        this.bookForm.get('isbn')?.setValue(result.isbn);
        this.bookForm.get('title')?.setValue(result.title);
        this.bookForm.get('pageAmount')?.setValue(result.page_amount);
        this.bookForm.get('bookCover')?.setValue(result.book_cover);
        this.bookForm.get('stock')?.setValue(result.stock);
        this.bookForm.get('releaseYear')?.setValue(result.release_year);
        this.bookForm.get('synopsis')?.setValue(result.synopsis);
        this.bookForm.get('price')?.setValue(result.price);
        this.bookForm.get('tags')?.setValue(result.tags);
        this.bookForm.get('author')?.setValue(result.author.id_author);
        this.bookForm.get('publisher')?.setValue(result.publisher.id_publisher);
        this.bookForm.get('genre')?.setValue(result.genres[0]);
      })).subscribe();
  }

  getGenres() {
    this.genreService.getAllGenres()
      .subscribe((result: Genre[]) => {
        this.genres = this.genreService.oderGenresByAuthorNameAsc(result);
      })
  }

  getAuthors() {
    this.authorService.getAllAuthors()
      .subscribe((result: Author[]) => {
        this.authors = this.authorService.oderAuthorsByAuthorNameAsc(result);
      });
  }

  getPublishers() {
    this.publisherService.getAllPublishers()
      .subscribe((result: Publisher[]) => {
        this.publishers = this.publisherService.oderPublishersByAuthorNameAsc(result);
      });
  }

  onSaveHandle(event: Event) {
    event.preventDefault;

    if (this.action === 'create') {
      this.saveNewBook();
    }

    if (this.action === 'edit') {
      this.saveUpdateBook();
    }

  }

  saveNewBook() {

    this.book = {
      isbn: this.isbn,
      title: this.title,
      page_amount: this.pageAmount,
      book_cover: this.bookCover,
      stock: this.stock,
      release_year: this.releaseYear,
      synopsis: this.synopsis,
      price: this.price,
      tags: this.tags,
      author_id: this.author,
      publisher_id: this.publisher,
      genre_ids: [this.genre]
    }

    this.bookService.saveBook(this.book)
      .subscribe((result: Book) => {
        let book: Book = result;

        if (book) {
          this.activeModal.close(true);
        }
      });
  }

  saveUpdateBook() {

    this.book = {
      isbn: this.isbn,
      title: this.title,
      page_amount: this.pageAmount,
      book_cover: this.bookCover,
      stock: this.stock,
      release_year: this.releaseYear,
      synopsis: this.synopsis,
      price: this.price,
      tags: this.tags,
      author_id: this.author,
      publisher_id: this.publisher,
      genre_ids: [this.genre]
    }

    this.bookService.updateBook(this.book)
      .subscribe((result: Book) => {
        let book: Book = result;

        if (book) {
          this.activeModal.close(true);
        }
      });
  }

  onConfirmDelete() {
    this.bookService.deleteBook(this.bookIsbn)
      .subscribe(() => {
        this.activeModal.close(true);

      });

  }



  onClose() {
    this.activeModal.close(false);
  }

  createForm() {
    this.bookForm = this.formBuilder.group({
      isbn: [{ value: '', disabled: !this.formEnable }, [Validators.required]],
      title: [{ value: '', disabled: !this.formEnable }, [Validators.required]],
      pageAmount: [{ value: '', disabled: !this.formEnable }, [Validators.required]],
      bookCover: [{ value: '', disabled: !this.formEnable }, [Validators.required]],
      stock: [{ value: '', disabled: !this.formEnable }, [Validators.required]],
      releaseYear: [{ value: '', disabled: !this.formEnable }, [Validators.required]],
      synopsis: [{ value: '', disabled: !this.formEnable }, [Validators.required]],
      price: [{ value: '', disabled: !this.formEnable }, [Validators.required]],
      tags: [{ value: '', disabled: !this.formEnable }, [Validators.required]],
      author: [{ value: '', disabled: !this.formEnable }, [Validators.required]],
      publisher: [{ value: '', disabled: !this.formEnable }, [Validators.required]],
      genre: [{ value: '', disabled: !this.formEnable }, [Validators.required]],
    });
  }

  get isbn() {
    return this.bookForm.value.isbn as string;
  }

  get title() {
    return this.bookForm.value.title as string;
  }

  get pageAmount() {
    return this.bookForm.value.pageAmount as number;
  }

  get bookCover() {
    return this.bookForm.value.bookCover as string;
  }

  get stock() {
    return this.bookForm.value.stock as number;
  }

  get releaseYear() {
    return this.bookForm.value.releaseYear as number;
  }

  get synopsis() {
    return this.bookForm.value.synopsis as string;
  }

  get price() {
    return this.bookForm.value.price as string;
  }

  get tags() {
    return this.bookForm.value.tags as string;
  }

  get author() {
    return this.bookForm.value.author as number;
  }

  get publisher() {
    return this.bookForm.value.publisher as number;
  }

  get genre() {
    return this.bookForm.value.genre as number;
  }

}
