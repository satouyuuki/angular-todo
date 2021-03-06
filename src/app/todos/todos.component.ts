import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { ITEMS } from '../todo-item';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  // todo: Todo = {
  //   id: 1,
  //   name: 'todotitle1'
  // }
  // todoItems = ITEMS;
  todoItems: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getServiceTodos();
  }
  // hero = 'wasingon';
  
  /**
   * ルーティングの際に必要なくなった
   */
  // selectItem: Todo;
  // onSelect(todo: Todo): void {
  //   this.selectItem = todo;
  // }

  // getServiceTodos(): void {
  //   this.todoItems = this.todoService.getTodos();
  // }
  getServiceTodos(): void {
    this.todoService.getTodos()
      .subscribe(hoges => this.todoItems = hoges)
  }
  add(name: string):void {
    name = name.trim();
    if(!name) {return;}
    this.todoService.addTodo({ name } as Todo)
      .subscribe(hogehoge => {
        this.todoItems.push(hogehoge);
      });
  }
  delete(item: Todo):void {
    this.todoItems = this.todoItems.filter(h => h !== item);
    this.todoService.deleteTodo(item).subscribe();
  }
}
