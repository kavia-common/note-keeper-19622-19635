import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from '../models/note.model';
import { formatDateTime } from '../shared/date.util';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {
  @Input() notes: Note[] = [];
  @Output() view = new EventEmitter<Note>();
  @Output() edit = new EventEmitter<Note>();
  @Output() delete = new EventEmitter<Note>();

  // PUBLIC_INTERFACE
  format(dt?: string) { return formatDateTime(dt); }
}
