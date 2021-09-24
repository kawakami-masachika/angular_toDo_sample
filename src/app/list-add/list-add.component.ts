import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToDoListService } from '../state/to-do-list.service';

@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.scss'],
})
export class ListAddComponent implements OnInit {
  flag =  true
  listAddForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
  });
  constructor(private toDoListService : ToDoListService) {}

  ngOnInit(): void {}
  show(e: any) {
    console.log(e.value);
  }
  addList() {
    let newList: { id: number, title: string; card: null } = {id: null, title: '', card: null};
    newList.title = this.listAddForm.value.title;
    this.toDoListService.addList(newList);
  }

  get title() { return  this.listAddForm.get('title')}
}
