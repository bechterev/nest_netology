import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { title } from 'process';
import { Book, BookDocument } from './Ibook';

interface IbooksRepository {
  createBook(book: Book);
  getBook(id: string): Book | Error;
  getBooks(): Array<Book>;
  updateBook(id: string, data: any): Book;
  deleteBook(id: string): string;
}

@Injectable()
export class BookService implements IbooksRepository {
  constructor(
    @InjectModel(Book.name) private BookModel: Model<BookDocument>,
   // @InjectConnection() private connection: Connection,
  ) {}
  createBook(book: Book): BookDocument {
    this.books.push(book);
    return <BookDocument>book;
  }
  getBook(id: string): Book {
    let book: Book | undefined = this.books.find((el) => {
      el.id === id;
    });
    if (typeof book === 'undefined') throw Error('not found book');
    else return book;
  }
  getBooks(): Book[] {
    return this.books;
  }
  updateBook(id: string, data: any): Book {
    const { title, authors, description, favorite, fileCover, fileName } = data;
    let index: number = -1;
    let changeBook: Book | undefined = this.books.find((el, ind) => {
      if (el.id === id) {
        index = ind;
        return true;
      } else return false;
    });
    if (index === -1) throw new Error('not found book');
    else {
      changeBook.authors =
        typeof authors === 'undefined' ? changeBook.authors : authors;
      changeBook.description =
        typeof description === 'undefined'
          ? changeBook.description
          : description;
      changeBook.favorite =
        typeof favorite === 'undefined' ? changeBook.favorite : favorite;
      changeBook.fileCover =
        typeof fileCover === 'undefined' ? changeBook.fileCover : fileCover;
      changeBook.fileName =
        typeof fileName === 'undefined' ? changeBook.fileName : fileName;
      this.books[index] = changeBook;
      return changeBook;
    }
  }
  deleteBook(id: string): string {
    let indexBook: number = this.books.findIndex((el) => 
      el.id === id );
    if (indexBook === -1) {//throw  Error('not found book');
  }
    else {
      this.books.splice(indexBook, 1);
      return `The book with id ${id} deleted`;
    }
  }
  private readonly books: Array<Book> = [];
}
