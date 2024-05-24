import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  size = 40;
  font = 'Arial';
  color = 'red';
  
  classes = ['green-title', 'uppercase'];
  underline = 'underline-title';
}
