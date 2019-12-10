import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ITEMS } from './todo-item';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }

  //httpTodosがInMemoryDataServiceと繋がってる
  private todosUrl = 'api/httpTodos'; // WebAPIのURL

  // getTodos(): Todo[] {
  //   return ITEMS;
  // }
  // routingまではRxjsのofを使ってObservable<Hero[]>で返していた
  // getTodos(): Observable<Todo[]> {
  //   return of(ITEMS);
  // }
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl)
      .pipe(
        catchError(this.handleError<Todo[]>('getTodos', []))
      );
  }
  /**
   * 失敗したHttp操作を処理する
   * アプリを持続させる
   * @param operation - 失敗した操作の名前
   * @param result - observableな結果として返す任意の値
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }
  // getItem(id: number): Observable<Todo> {
  //   return of(ITEMS.find(hoge3 => hoge3.id === id));
  // }
  getItem(id: number): Observable<Todo> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.get<Todo>(url).pipe(
      catchError(this.handleError<Todo>(`getTodo id=${id}`))
    );
  }
  /**
 * PUT: サーバー場でヒーローを更新
 */
  updateTodo(todo: Todo): Observable<any> {
    return this.http.put(this.todosUrl, todo, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateTodo'))
    );
  }
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, this.httpOptions).pipe(
      catchError(this.handleError<Todo>('addTodo'))
    );
  }
  /** DELETE: サーバーからヒーローを削除 */
  deleteTodo(todo: Todo | number): Observable<Todo> {
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${this.todosUrl}/${id}`;

    return this.http.delete<Todo>(url, this.httpOptions).pipe(
      catchError(this.handleError<Todo>('deletetodo'))
    );
  }
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
}
