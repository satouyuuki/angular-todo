import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ITEMS } from './todo-item';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  // getTodos(): Todo[] {
  //   return ITEMS;
  // }
  getTodos(): Observable<Todo[]> {
    return of(ITEMS);
  }
  getItem(id: number): Observable<Todo> {
    return of(ITEMS.find(hoge3 => hoge3.id === id));
  }
}
