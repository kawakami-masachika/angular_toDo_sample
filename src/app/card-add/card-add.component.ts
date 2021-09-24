import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToDoListService } from '../state/to-do-list.service';


@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.scss'],
})
export class CardAddComponent implements OnInit {
  @Input() listId: number;
  constructor(
    private builder: FormBuilder,
    private toDoListService: ToDoListService
  ) {}

  ngOnInit(): void {}
  //FORMオブジェクト生成
  cardAddForm = this.builder.group({
    taskName: new FormControl('', [Validators.required]),
  });

  addTask() {
    this.toDoListService.addTask(this.listId, this.cardAddForm.value.taskName);
    this.cardAddForm.reset();
  }
}
