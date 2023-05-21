import { Author } from '../author/author-model';
import { Publisher } from '../publisher/publisher-model';

export interface Book {
  id: number;
  title: string;
  author: Author;
  img: string;
  price: number;
  sinopsis: string;
  publisher: Publisher;
  isbn: string;
  pageAmount: number;
  language: string;
  genre: string[];
  releaseDate: string;
  stock: number;
  totalSold: number;
  tags: string[];
}

export interface SelectedBookDto
  extends Pick<Book, 'id' | 'title' | 'author' | 'img' | 'price' | 'isbn'> {
  selectedAmount: number;
}
