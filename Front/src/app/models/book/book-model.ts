import { Author } from '../author/author-model';
import { Genre } from '../genre/genre-model';
import { Publisher } from '../publisher/publisher-model';

export interface Book {
  isbn: string;
  author: Author;
  publisher: Publisher;
  genres: Genre[];
  title: string;
  page_amount: number;
  book_cover: string;
  stock: number;
  release_year: number;
  synopsis: string;
  price: string;
  tags: string;
}

export interface SelectedBookDto
  extends Pick<Book, 'isbn' | 'title' | 'author' | 'book_cover' | 'price'> {
  selectedAmount: number;
}
