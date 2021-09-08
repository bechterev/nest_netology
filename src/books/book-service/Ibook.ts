import {v4 as uuidv4} from 'uuid';
export interface Ibook {
    title:string;
    description:string;
    authors:string[];
    favorite:string;
    fileCover:string;
    fileName:string;
    id?: string;
}

export class Book implements  Ibook {
    title: string;
    description: string;
    authors: string[];
    favorite: string;
    fileCover: string;
    fileName: string;
    id?:string;
    constructor(title:string, description: string = '',
        authors:string[] = [],
        favorite:string ='', fileCover:string = '',
        fileName:string=''){
        this.authors = authors;
        this.description = description;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
        this.title = title;
        this.id = uuidv4();
    }
}