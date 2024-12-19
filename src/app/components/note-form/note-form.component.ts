import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/interfaces/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {

  noteForm!: FormGroup;

  constructor(private noteService:NoteService, private formBuilder:FormBuilder) {

  }

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      id:1,
      title: ['', Validators.required],
      content:['', Validators.required]
    })
  }


  onSubmit(): void {
    if(this.noteForm.invalid){
      return;
    }

    const note: Note = this.noteForm.value;
    console.log(note)
    // save to notes array in the note service
    this.noteForm.reset();
  }

}
