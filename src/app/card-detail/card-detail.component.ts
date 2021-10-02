import { getLocaleDirection, NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ToDoListQuery } from '../state';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent implements OnInit {
  listId: number;
  cardId: number;
  card: { taskId: number; taskName: string };

  constructor(private route: ActivatedRoute, private query: ToDoListQuery) {}

  ngOnInit(): void {
    this.cardId = Number(this.route.snapshot.paramMap.get('id'));
    this.listId = Number(this.route.snapshot.paramMap.get('listId'));
    this.getCard(this.listId, this.cardId);
  }

  getCard(
    listId: number,
    cardId: number
  ): { taskId: number; taskName: string } {
    return (this.card = this.query.getCard(listId, cardId));
  }
}
