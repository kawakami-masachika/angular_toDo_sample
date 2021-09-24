import { Component, OnInit, Input } from '@angular/core';
import { AlertPromise } from 'selenium-webdriver';
import { ToDoListService } from '../state/to-do-list.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() listId: number;
  @Input() task: { taskId: number; taskName: string };

  constructor(private toDoListService: ToDoListService) {}

  deleteTask(ListId, TaskId) {
    if(confirm('本当にタスクを削除しますか？')){
      this.toDoListService.deleteTask(ListId, TaskId);
    }
  }

  ngOnInit(): void {}
}
