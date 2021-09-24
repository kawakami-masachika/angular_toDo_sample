import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { ToDoListStore, ToDoListState } from './to-do-list.store';
import { state } from '@angular/animations';

@Injectable()
export class ToDoListQuery extends Query<ToDoListState> {
  constructor(protected store: ToDoListStore) {
    super(store);
  }
}
