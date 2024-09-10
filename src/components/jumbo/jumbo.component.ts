import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-jumbo',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './jumbo.component.html',
  styleUrl: './jumbo.component.scss'
})
export class JumboComponent {

  protected value = 43;

}
