import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {

  constructor() { }
   name = new FormControl('');

  updateName() {
    this.name.setValue('Vinod');
  }

  onOpen(event) {
    console.log('Event: ', event);
  }

  onClose(event) {
    console.log('Event: ', event);
  }
}
