import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notes: Note[] = [];
  private noteSubject = new BehaviorSubject<Note[]>([]);
  private isEdit = new BehaviorSubject<boolean>(false);

  constructor() { }

  createNote(note:Note) : void {
    note.id = new Date().getTime();
    this.notes.push(note)
    this.noteSubject.next(this.notes)
  }

  getNotesObservable() : Observable<Note[]> {
    return this.noteSubject.asObservable();
  }

  getEditable() {
    return this.isEdit.asObservable();
  }

  setEditable(value: boolean) {
    this.isEdit.next(value);
  }


  deleteNote(id:number): void {
    this.notes = this.notes.filter(note => note.id  !== id);
    this.noteSubject.next(this.notes)
  }
}
