import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from '../user/user.model';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})


export class TasksComponent {
  @Input({ required: true }) userId?: string;
  @Input({ required: true }) name?: string;
  tasks = dummyTasks;
  isAddingTask: boolean = false;

  get filteredTasks() {
    return this.tasks.filter((task: any) => task.userId == this.userId);
  }

  onComplete(id: string) {
    this.tasks = this.tasks.filter((task: any) => task.id !== id);
  }

  addNewTask() {
    console.log('add')
    this.isAddingTask = true;
  }

  cancelAddingTask() {
    this.isAddingTask = false;
  }

  createTask(taskData: NewTaskData) {
    this.tasks.push({
      id: 't' + (this.tasks.length + 1),
      userId: this.userId!,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    });
    this.isAddingTask = false;
  }

}
