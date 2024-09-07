import { Component } from '@angular/core';
import { TaskListComponent } from "../task-list/task-list.component";
import { CalendarComponent } from "../calendar/calendar.component";

@Component({
  selector: 'app-sift-content',
  standalone: true,
  imports: [TaskListComponent, CalendarComponent],
  templateUrl: './sift-content.component.html',
  styleUrl: './sift-content.component.scss'
})
export class SiftContentComponent {

}
