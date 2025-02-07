import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-curriculum-vitae',
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './curriculum-vitae.component.html',
  styleUrl: './curriculum-vitae.component.css',
})
export class CurriculumVitaeComponent {}
