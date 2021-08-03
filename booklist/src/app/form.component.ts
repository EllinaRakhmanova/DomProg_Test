import { Component, Input, Output, EventEmitter } from '@angular/core';

export class Item{

    constructor(public author: string,
                public year: number, 
                public title: string, 
                public pages: number) 
    { }
}

@Component({
    selector: 'book-form',
    template: `<form>
        <div class="form-content">
            <label>Автор</label>
            <input name="author" [(ngModel)]="author" (ngModalChange)="addItem($event)"/>
        </div>
        <div class="form-content">
            <label>Год издания</label>
            <input name="year" [(ngModel)]="year" />
        </div>
        <div class="form-content">
            <label>Название</label>
            <input name="title" [(ngModel)]="title" />
        </div>
        <div class="form-content">
            <label>Количество страниц</label>
            <input name="pages" [(ngModel)]="pages" />
        </div>
        <div class="form-content">
            <button>Add</button>
        </div>
    </form>`,
    styleUrls: ['./form.component.css']
})

export class BookFormComponent {

    @Input() author: string = "";
    @Input() year: number = 0;
    @Input() title: string = "";
    @Input() pages: number = 0;

    @Output() addBook = new EventEmitter<string>();

    addItem(bookAuthor: string) {
        this.author = bookAuthor;
        this.addBook.emit(bookAuthor);

        this.author = "";
        this.year = 0;
        this.title = "";
        this.pages = 0;
    }
}
