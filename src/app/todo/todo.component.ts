import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todoListArray: any[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodoList().snapshotChanges().subscribe(
      item => {
        this.todoListArray = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          x['$key'] = element.key;
          console.log(x);
          this.todoListArray.push(x);
        });
        this.todoListArray.sort((a, b) => {
            return a.isChecked - b.isChecked;
          }
        );
      }
    );
  }

  addItem(title: HTMLInputElement) {
    this.todoService.setTitle(title.value);
    title.value = null;
  }

  updateCheck($key: string, isChecked: boolean) {
    this.todoService.checkOrUncheckTask($key, !isChecked);
  }

  deleteTask($key: string) {
    this.todoService.removeTask($key);
  }
}
