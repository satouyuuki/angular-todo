import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

const routes: Routes = [
  {path: 'todos', component: TodosComponent},
  {path: 'detail/:id', component: TodoDetailComponent},
  {path: '', redirectTo: '/todos', pathMatch: 'full'},
];

@NgModule({
  // declarations: [],
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
