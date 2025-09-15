import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-note-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './note-editor.component.html',
  styleUrl: './note-editor.component.css'
})
export class NoteEditorComponent implements OnChanges {
  @Input() note: Note | null = null;
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<Note>();

  title = signal<string>('');
  content = signal<string>('');

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['note']) {
      this.title.set(this.note?.title || '');
      this.content.set(this.note?.content || '');
    }
  }

  onSubmit(): void {
    const trimmedTitle = (this.title() || '').trim();
    const payload: Note = {
      id: this.note?.id,
      title: trimmedTitle || 'Untitled',
      content: this.content() || ''
    };
    this.save.emit(payload);
  }
}
