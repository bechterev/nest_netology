import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from '../book-service/book-service.service';
import { Book, Ibook } from '../book-service/Ibook';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService){}
    @Get(':id')
    async getBook(@Param() params):Promise<Book>{
        let book = this.bookService.getBook(params.id);
        if(typeof book!=='undefined') return Promise.resolve(book);
        else return Promise.reject('not found');
    }
    @Delete(':id')
    async deleteBook(@Param() params):Promise<string>{
        let book = this.bookService.deleteBook(params.id);
        if(typeof book!=='undefined') return Promise.resolve(book);
        else return Promise.reject('not found');
    }
    @Get()
    async getBooks():Promise<Book[]>{
        let books = this.bookService.getBooks();
        if(typeof books!=='undefined') return Promise.resolve(books);
        else return Promise.reject('not found');
    }
    @Post()
    async createBook(@Body() newBook: any):Promise<void>{
        console.log(newBook)
        let book = new Book(newBook);
        try{this.createBook(book); return Promise.resolve()}
        catch(e){
            console.log(e)
        }
        return Promise.reject('dsad')
    }
    @Put(':id')
    async updateBook(@Param() params, @Body() data: any):Promise<Book>{
        try{
            let book  = this.updateBook(params.id, data);
            if(typeof book !== 'undefined') return Promise.resolve(book);
            else return Promise.reject('not found')
        }
        catch(e){
            return Promise.reject(e);
        }
        
    }
}
