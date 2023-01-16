import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {TaskAddComponent} from "./task-add/task-add.component";
import {TaskEditComponent} from "./task-edit/task-edit.component";
import { TaskViewComponent } from './task-view/task-view.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent
  },
  {
    path: 'add-todo',
    component: TaskAddComponent,
    data: {title: 'Add new todo'}
  },
  
  {
    path: ':id',
    component: TaskViewComponent,
    data: {title: 'check todo'}
  },

  {
    path: ':id/edit',
    component: TaskEditComponent,
    data: {title: 'todo edit'}
  },
  
  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
