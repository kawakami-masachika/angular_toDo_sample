import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { enableAkitaProdMode } from '@datorama/akita';

enableAkitaProdMode();

export interface ToDoListState {
  list: { id: number, title: string; card: {taskId: number, taskName: string}[]}[];
};

@StoreConfig({ name: 'toDoList'})
export class ToDoListStore extends EntityStore<ToDoListState> {
  list: {
    id: number;
    title: string;
    card: { id: number; taskName: string }[];
  }[];
  constructor() {
    super(createInitialState());
  }
}


export function createInitialState(): ToDoListState {
  return {
    list: [
      {
        id: 1,
        title: 'ToDo',
        card: [
          { taskId: 1, taskName: 'タスク1' },
          { taskId: 2, taskName: 'タスク2' },
          { taskId: 3, taskName: 'タスク3' },
        ],
      },
      {
        id: 2,
        title: 'Progress',
        card: [
          { taskId: 1, taskName: 'タスク4' },
          { taskId: 2, taskName: 'タスク5' },
          { taskId: 3, taskName: 'タスク6' },
        ],
      },
    ],
  };
}
