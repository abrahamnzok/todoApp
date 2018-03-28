import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable()
export class TodoService {
  todoList: AngularFireList<any>;

  constructor(private firebasedb: AngularFireDatabase) {
  }

  getTodoList() {
    this.todoList = this.firebasedb.list('titles');
    return this.todoList;
  }

  setTitle(title: string) {
    this.todoList.push(
      {
        title: title,
        isChecked: false
      }
    );
  }

  checkOrUncheckTask($key: string, flag: boolean) {
    this.todoList.update($key, {isChecked: flag});
  }

  removeTask($key: string) {
    this.todoList.remove($key);
  }
}
