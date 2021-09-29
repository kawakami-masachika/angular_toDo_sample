import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CardDetailComponent } from './card-detail/card-detail.component';
import { BoardComponent } from './board/board.component';
import { ListDetailComponent } from './list-detail/list-detail.component';

const routes: Routes = [
  { path: 'board', component: BoardComponent},
  { path: 'lists/:id', component: ListDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
