import { Book } from "./book-model";

export interface SelectedBookDto extends Pick<Book, 'id' | 'title' | 'author' | 'img' | 'price' | 'isbn'> {
  selectedAmount: number;
}
