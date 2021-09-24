import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { ListAddComponent } from './list-add/list-add.component';
import { ToDoListQuery, ToDoListService, ToDoListStore } from './state';
import { CardAddComponent } from './card-add/card-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent,
    ListComponent,
    ListAddComponent,
    CardAddComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [ToDoListQuery, ToDoListStore, ToDoListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
