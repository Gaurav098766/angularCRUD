import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './tasks.service';
import { NewTaskData } from '../user/user.model';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})


export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  tasks = dummyTasks;
  isAddingTask: boolean = false;

  constructor(private taskService: TaskService) { }

  get filteredTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onComplete(id: string) {
    this.taskService.removeTask(id);
  }

  addNewTask() {
    console.log('add')
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}
