import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
// import { TodosComponent } from '../todos/todos.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  @Input() appendtodo:  Todo;
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) { }

  ngOnInit():void {
    this.getServieItem();
  }

  getServieItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getItem(id)
      .subscribe(hoge2 => this.appendtodo = hoge2);
  }
  goBack(): void {
    this.location.back();
  }
}
