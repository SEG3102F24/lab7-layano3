import { Component } from '@angular/core';
import { BooksService } from '../books/service/books.service';
import { Author } from '../books/model/book';
import { FormsModule, NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-author',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.css'],
    standalone: true,
    imports: [FormsModule, NgIf]
})
export class AuthorComponent {
    authorId: string = '';
    author?: Author;
    errorMessage: string = '';

    constructor(private booksService: BooksService) {}

    onSubmit(): void {
        this.booksService.getAuthorById(this.authorId).subscribe({
            next: (data) => {
                this.author = data;
                this.errorMessage = '';
            },
            error: () => {
                this.author = undefined;
                this.errorMessage = 'Author not found';
            }
        });
    }
}
