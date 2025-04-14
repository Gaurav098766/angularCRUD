import { Component, Input, EventEmitter, Output } from '@angular/core';
import { type User } from './user.model';
import { TasksComponent } from "../tasks/tasks.component";
import { CardComponent } from "../shared/card/card.component";


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TasksComponent, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() selectedUser = new EventEmitter<string>();


  get ImagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.selectedUser.emit(this.user.id);
  }
  constructor() { }
}
