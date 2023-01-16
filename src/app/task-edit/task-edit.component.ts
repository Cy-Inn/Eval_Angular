import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Task} from "../models/task.model";
import {TaskStorageService} from "../task-storage.service";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  task: Task;
  id;
  title = new FormControl('');
  note = new FormControl('');

  constructor(private storage: TaskStorageService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.task = this.storage.get(params.get('id'));
      this.id = this.task.id;      
      this.title.setValue(this.task.title);
    });
  }
  updateTask() {
    this.task = this.storage.update(this.id, this.title.value);
    this.router.navigate([''])
  }
}
