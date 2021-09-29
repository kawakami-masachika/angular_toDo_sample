import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { ToDoListStore, ToDoListState } from './to-do-list.store';

@Injectable()
export class ToDoListQuery extends Query<ToDoListState> {
  constructor(protected store: ToDoListStore) {
    super(store);
  }
  getList(listId: number): {
    id: number;
    title: string;
    card: { taskId: number; taskName: string }[];
  } {
    let targetIndex : number = this.store.getValue().list.findIndex(({ id }) => id == listId);
    return this.store.getValue().list[targetIndex];
  }
}
