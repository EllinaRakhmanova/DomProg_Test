import { Component, Input } from '@angular/core';

export class Item{

    constructor(public author: string,
                public year: number, 
                public title: string, 
                public pages: number) 
    { }
}

@Component({
    selector: 'book-list',
    template: `<div class="header-block">
        <h1>Список книг</h1>
    </div>
    <div class="content-block">
        <button class="add-btn" (click)="showForm()">Add book</button>
        <div class="form-modal">
            <form>
                <i class="fas fa-times-circle" (click)="closeForm()"></i>
                <div class="form-content">
                    <label>Автор</label>
                    <input class="form-control" name="author" [(ngModel)]="author" />
                </div>
                <div class="form-content">
                    <label>Год издания</label>
                    <input class="form-control" name="year" [(ngModel)]="year" />
                </div>
                <div class="form-content">
                    <label>Название</label>
                    <input class="form-control" name="title" [(ngModel)]="title" />
                </div>
                <div class="form-content">
                    <label>Количество страниц</label>
                    <input class="form-control" name="pages" [(ngModel)]="pages" />
                </div>
                <div class="form-content">
                    <button (click)="addItem()">Add</button>
                </div>
            </form>
        </div>
        <tr *ngFor="let item of items; let i = index;">
            <td>{{item.author}}</td>
            <td>{{item.title | uppercase}}</td>
            <td><button (click)="editItem(i)">Edit</button></td>
            <td><button (click)="removeItem(i)">Remove</button></td>
        </tr>
    </div>`,
    styleUrls: ['./app.components.css']
})

export class BookListComponent {

    @Input() author: string = "";
    @Input() year: number = 0;
    @Input() title: string = "";
    @Input() pages: number = 0;
    itemsKey: string = "mykey";

    obj: Item [] = [
            { author: "Владимир Набоков", year: 2010, title: "Бледный огонь", pages: 315 },
            { author: "Чарльз Буковски", year: 2006, title: "Записки старого кобеля", pages: 231 },
            { author: "Поль Б. Пресьядо", year: 2020, title: "Я монстр, что говорит с вами", pages: 101 },
            { author: "Alexander Wolkow", year: 1982, title: "Der Zauberer der Smaragdenstand", pages: 213 }
        ];

    items: any = (localStorage[this.itemsKey]) ? JSON.parse(localStorage.getItem(this.itemsKey)) : this.obj;

    addLocal() {  
        let localObj = JSON.stringify(this.items);
    
        localStorage.setItem(this.itemsKey, localObj);

        this.obj = JSON.parse(localStorage.getItem(this.itemsKey));
        this.items = this.obj;
    }

    showForm() {
        document.querySelector('.form-modal').classList.add('show');
    }

    closeForm() {
        if (this.author !== "" && this.year !== 0 && this.title !== "" && this.pages !== 0) {
            this.items.push(new Item(this.author, this.year, this.title, this.pages));
            this.addLocal();

            this.author = "";
            this.year = 0;
            this.title = "";
            this.pages = 0;
        }

        document.querySelector('.form-modal').classList.remove('show');
    }

    addItem() {
        let allInput = document.querySelectorAll('input');

        if (this.author == "" || this.year == 0 || this.title == "" || this.pages == 0) {
            allInput.forEach(e => e.classList.add('danger'));
        } else {
            this.items.push(new Item(this.author, this.year, this.title, this.pages));

            allInput.forEach(e => e.classList.remove('danger'));
            document.querySelector('.form-modal').classList.remove('show');
            this.addLocal();

            this.author = "";
            this.year = 0;
            this.title = "";
            this.pages = 0;
        }
    }

    removeItem(id: number) {
        this.items = this.items.filter((v, i) => i !== id);
        this.addLocal();
    }

    editItem(id: number) {
        let item = this.items.filter((v, i) => i == id)

        document.querySelector('.form-modal').classList.add('show');

        if (this.author !== "" && this.year !== 0 && this.title !== "" && this.pages !== 0) {
            this.items.push(new Item(this.author, this.year, this.title, this.pages));
            this.addLocal();

            this.author = "";
            this.year = 0;
            this.title = "";
            this.pages = 0;
        } else {
            this.author = item[0].author;
            this.year = item[0].year;
            this.title = item[0].title;
            this.pages = item[0].pages;
            this.addLocal();

            this.items = this.items.filter((v, i) => i !== id);
        }
    }
}
