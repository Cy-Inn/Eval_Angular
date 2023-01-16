import {Component, OnInit} from '@angular/core';
import {Task} from "../models/task.model";
import {TaskStorageService} from "../task-storage.service";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  task: Task;

  constructor(private storage: TaskStorageService, private route: ActivatedRoute, private router: Router) {
  }

  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.task = this.storage.get(params.get('id'));
    });
  }

  
  delete(id): void {
    this.storage.delete(this.task.id);
    this.router.navigate([''])
  }
}
