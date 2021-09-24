import { Component, OnInit, Input } from '@angular/core';
import { ToDoListService } from '../state'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() taskState: { id: number; title: string };
  @Input() taskList: Array<String>;
  constructor(private ToDoListService : ToDoListService) {}

  ngOnInit(): void {}

  deleteList(listId: number) {
    if(confirm('本当にリストを削除しますか？')){
      this.ToDoListService.deleteList(listId);
    }
  }
}
