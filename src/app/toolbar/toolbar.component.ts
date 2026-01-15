import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  @Input() matchCount: number = 0;
  @Input() currentMatchIndex: number = 0;
  @Input() isItalian: boolean = false;

  @Output() search = new EventEmitter<string>();
  @Output() languageChange = new EventEmitter<void>();
  @Output() nextMatchEvent = new EventEmitter<void>();
  @Output() prevMatchEvent = new EventEmitter<void>();
  @Output() scrollEvent = new EventEmitter<string>();

  onSearch(value: string) {
    this.search.emit(value);
  }

  toggleLanguage() {
    this.languageChange.emit();
  }

  nextMatch() {
    this.nextMatchEvent.emit();
  }

  prevMatch() {
    this.prevMatchEvent.emit();
  }

  scrollTo(section: string) {
    this.scrollEvent.emit(section);
  }
}
