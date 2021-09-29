import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoListQuery } from '../state/to-do-list.query';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss'],
})
export class ListDetailComponent implements OnInit {
  list:
    {
        id: number;
        title: string;
        card: { taskId: number; taskName: string }[];
      }
    | undefined;
  constructor(
    private route: ActivatedRoute,
    private toDoListQuery: ToDoListQuery
  ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(): any {
    const listId = Number(this.route.snapshot.paramMap.get('id'));
    return (this.list = this.toDoListQuery.getList(listId));
  }
}
