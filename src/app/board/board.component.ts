import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';
import {ToDoListQuery} from '../state/to-do-list.query'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  toDoList$: Observable< {id: number, title: string, card: { taskId: number; taskName: string }[]}[]>;
  ToDoList: string[] = ['progress', 'done'];
  totalCardCount: number = 10;
  flag = false;
  constructor(private todoListQuery: ToDoListQuery) {
    this.toDoList$ = this.todoListQuery.select('list');
  }
  ngOnInit(): void {}
}
