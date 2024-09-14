import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  formFields;
  constructor(private formBuilder: FormBuilder) {
    this.formFields = this.formBuilder.group({
      taskName: '',
      score: ''
    });
  }

  addTask(){
    //TODO: create task logic
  }
}
