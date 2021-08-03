import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BookListComponent } from "./app.components";

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ BookListComponent ],
    bootstrap: [ BookListComponent ]
})

export class AppModule { }
