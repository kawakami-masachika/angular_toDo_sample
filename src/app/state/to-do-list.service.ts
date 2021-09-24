import { ToDoListStore } from './to-do-list.store';
import { Injectable } from '@angular/core';
import { Store } from '@datorama/akita';


@Injectable()
export class ToDoListService {
  constructor(private ToDoListStore: ToDoListStore) {}
  getMax = function (a, b) {
    return Math.max(a, b);
  };

  addList(newTitle: { id: number; title: string; card: null }) {
    newTitle['id'] = this.ToDoListStore.getValue()
      .list.map((x) => x['id'])
      .reduce(this.getMax);
    this.ToDoListStore.update((store) => ({
      ...store,
      list: store.list.concat(newTitle),
    }));
  }

  addTask(listId: number, task: string){
    let newTask: { taskId: number; taskName: string } = {taskId: null, taskName: task}
    this.ToDoListStore.getValue().list.forEach((x,i) =>{
      if(x.id == listId){
        newTask['taskId'] = x.card.map((x) => x['taskId']).reduce(this.getMax) + 1;
        x.card.push(newTask);
      }
    })
    this.ToDoListStore.update((store) => ({
      ...store,
      list: store.list
    }));
  };

  deleteTask(listId: number, cardId: number) {
    let copyList: {
      id: number;
      title: string;
      card: { taskId: number; taskName: string }[];
    }[] = [...this.ToDoListStore.getValue().list];

    copyList.forEach((x) => {
      if (x.id == listId) {
        let index: number = x.card.findIndex(({ taskId }) => taskId === cardId);
        x.card.splice(index, 1);
      }
    });
    this.ToDoListStore.update((store) => ({
      ...store,
      list: copyList,
    }));
  }
  deleteList(listId: number) {
    let copyList: {
      id: number;
      title: string;
      card: { taskId: number; taskName: string }[];
    }[] = [...this.ToDoListStore.getValue().list];
    copyList.forEach((x, i) => {
      if (x.id == listId) {
        copyList.splice(i, 1);
      }
    });
    this.ToDoListStore.update(
      {list:copyList}
    )
  }
}
