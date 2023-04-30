import { Author } from "../author/author-model";
import { Publisher } from "../publisher/publisher-model";

export interface Book {
  id: number;
  title: string;
  author: Author;
  img: string;
  description: string;
  publisher: Publisher;
  isbn: string;
  pageAmount: number;
  language: string;
  genre: string;
  releaseDate: Date;
  stock: number;
  totalSold: number;
  tags: string[];
}
