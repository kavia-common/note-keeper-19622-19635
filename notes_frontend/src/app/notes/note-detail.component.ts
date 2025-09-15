import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from '../models/note.model';
import { formatDateTime } from '../shared/date.util';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css'
})
export class NoteDetailComponent {
  @Input() note!: Note;
  @Output() close = new EventEmitter<void>();

  // PUBLIC_INTERFACE
  format(dt?: string) { return formatDateTime(dt); }
}
