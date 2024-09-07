import { Component } from '@angular/core';
import { TaskListComponent } from "../task-list/task-list.component";
import { CalendarComponent } from "../calendar/calendar.component";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-sift-content',
  standalone: true,
  imports: [TaskListComponent, CalendarComponent, MatIcon],
  templateUrl: './sift-content.component.html',
  styleUrl: './sift-content.component.scss'
})
export class SiftContentComponent {

}
