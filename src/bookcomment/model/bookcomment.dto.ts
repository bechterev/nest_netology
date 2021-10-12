import { PartialType } from "@nestjs/mapped-types";
import { isNotEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { CreateBookDto } from "src/books/book-service/create-book.dto";

export class CreateBookcommentDto {
    readonly id: number|string;
    @IsNumber()
    @IsNotEmpty()
    readonly bookId: number;
    @IsString()
    @IsNotEmpty()
    readonly comment: string;
}
export class UpdateBookCommentDto extends PartialType(CreateBookDto){}
