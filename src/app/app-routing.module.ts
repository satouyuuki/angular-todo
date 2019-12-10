import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';

const routes: Routes = [
  {path: 'todos', component: TodosComponent},
  { path: 'grid', component: GridLayoutComponent},
  {path: 'detail/:id', component: TodoDetailComponent},
  // {path: '', redirectTo: '/todos', pathMatch: 'full'},
  {path: '', redirectTo: '/grid', pathMatch: 'full'},
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
