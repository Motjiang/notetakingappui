import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Note } from 'src/app/interfaces/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent  implements  OnInit{

  notes:Note[] = [];

  constructor(private noteService:NoteService) {

  }

  ngOnInit(): void {
     //Test note list here
    this.noteService.getNotesObservable().subscribe((notes: Note[]) => {
      this.notes = notes;
    });
  }

  editNote(note:Note): void {

  }

  deleteNote(id:number): void {
    this.noteService.deleteNote(id);
  }
}
