import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../models/note.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

// PUBLIC_INTERFACE
@Injectable({ providedIn: 'root' })
export class NotesService {
  /** HTTP client for backend calls */
  private http = inject(HttpClient);
  /** Base URL for notes API (e.g., https://api.example.com) */
  private base = environment.apiBaseUrl.replace(/\/+$/, '');

  /** Get all notes */
  // PUBLIC_INTERFACE
  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.base}/notes`);
  }

  /** Get a single note by id */
  // PUBLIC_INTERFACE
  getNote(id: string): Observable<Note> {
    return this.http.get<Note>(`${this.base}/notes/${encodeURIComponent(id)}`);
  }

  /** Create a new note */
  // PUBLIC_INTERFACE
  createNote(payload: Pick<Note, 'title' | 'content'>): Observable<Note> {
    return this.http.post<Note>(`${this.base}/notes`, payload);
  }

  /** Update an existing note by id */
  // PUBLIC_INTERFACE
  updateNote(id: string, payload: Partial<Pick<Note, 'title' | 'content'>>): Observable<Note> {
    return this.http.put<Note>(`${this.base}/notes/${encodeURIComponent(id)}`, payload);
  }

  /** Delete a note by id */
  // PUBLIC_INTERFACE
  deleteNote(id: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/notes/${encodeURIComponent(id)}`);
  }
}
