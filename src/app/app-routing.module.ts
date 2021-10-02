import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { ListDetailComponent } from './list-detail/list-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'board', pathMatch: 'full' },
  { path: 'board', component: BoardComponent },
  { path: 'lists/:id', component: ListDetailComponent },
  {
    path: 'lists/:listId',
    children: [{ path: 'cards/:id', component: CardDetailComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
