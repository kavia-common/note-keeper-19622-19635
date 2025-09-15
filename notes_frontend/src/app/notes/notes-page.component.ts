import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesService } from '../services/notes.service';
import { Note } from '../models/note.model';
import { NotesListComponent } from './notes-list.component';
import { NoteEditorComponent } from './note-editor.component';
import { NoteDetailComponent } from './note-detail.component';

@Component({
  selector: 'app-notes-page',
  standalone: true,
  imports: [CommonModule, NotesListComponent, NoteEditorComponent, NoteDetailComponent],
  templateUrl: './notes-page.component.html',
  styleUrl: './notes-page.component.css'
})
export class NotesPageComponent implements OnInit {
  notes = signal<Note[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  // UI state
  showEditor = signal(false);
  editingNote = signal<Note | null>(null);
  selectedNote = signal<Note | null>(null);

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.fetchNotes();
  }

  fetchNotes(): void {
    this.loading.set(true);
    this.error.set(null);
    this.notesService.getNotes().subscribe({
      next: (data) => {
        // sort by updatedAt desc if available
        const sorted = [...data].sort((a, b) => {
          const da = a.updatedAt || a.createdAt || '';
          const db = b.updatedAt || b.createdAt || '';
          return db.localeCompare(da);
        });
        this.notes.set(sorted);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e?.message || 'Failed to load notes.');
        this.loading.set(false);
      }
    });
  }

  onAddNew(): void {
    this.editingNote.set({ title: '', content: '' });
    this.showEditor.set(true);
  }

  onEdit(note: Note): void {
    this.editingNote.set({ ...note });
    this.showEditor.set(true);
  }

  onView(note: Note): void {
    this.selectedNote.set(note);
  }

  onDelete(note: Note): void {
    if (!note.id) return;
    const ok = typeof window !== 'undefined' ? window.confirm('Delete this note?') : true;
    if (!ok) return;
    this.notesService.deleteNote(note.id).subscribe({
      next: () => this.fetchNotes(),
      error: (e) => this.error.set(e?.message || 'Failed to delete note.')
    });
  }

  onEditorClose(): void {
    this.showEditor.set(false);
    this.editingNote.set(null);
  }

  onEditorSave(note: Note): void {
    if (note.id) {
      this.notesService.updateNote(note.id, { title: note.title, content: note.content }).subscribe({
        next: () => { this.onEditorClose(); this.fetchNotes(); },
        error: (e) => this.error.set(e?.message || 'Failed to update note.')
      });
    } else {
      this.notesService.createNote({ title: note.title, content: note.content }).subscribe({
        next: () => { this.onEditorClose(); this.fetchNotes(); },
        error: (e) => this.error.set(e?.message || 'Failed to create note.')
      });
    }
  }

  closeDetails(): void { this.selectedNote.set(null); }
}
