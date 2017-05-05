/**
 * Created by jsen on 2017/4/10.
 */



import {Component, Input, Output, EventEmitter, ViewEncapsulation, ViewChild} from '@angular/core';
import {NoteService} from "../../../../service/note.service";
import {ModalDirective} from "ngx-bootstrap/index";
let moment = require('moment');
@Component({
  selector: 'note-timeline',
  templateUrl: './note.timeline.html',
  encapsulation: ViewEncapsulation.None
})
export class NoteTimelineComponent {
  @ViewChild('deleteModal')
  public deleteModal:ModalDirective;
  @Output()
  public itemClick: EventEmitter<any> = new EventEmitter();
  @Output()
  public createNote: EventEmitter<string> = new EventEmitter();
  @Output()
  public deleteNote: EventEmitter<any> = new EventEmitter();

  colors = [
    'bg-red',
    'bg-green',
    'bg-blue',
    'bg-gray'
  ];
  @Input()
  nodes;
  @Input()
  notebook;


  constructor(private noteService: NoteService) {
  }

  title:string;
  url:string;
  // click
  OnDelete(title, url) {
    this.title = title;
    this.url = url;
    this.deleteModal.show();
  }

  OnHandleDelete() {
    this.deleteModal.hide();
    this.deleteNote.emit({url:this.url, notebook:this.notebook, title:this.title});
  }

  public FilterNotes() {
    let res = [];
    let nodes = this.nodes;

    if(nodes && nodes.length>0) {
      let colorIndex = 0;
      let colorLength = this.colors.length;
      let date = null;
      for(let i = 0; i<nodes.length; i++) {
        let note = nodes[i];
        if(date == null
          || !moment(date).isSame(note.modifytime, 'year')
          || !moment(date).isSame(note.modifytime, 'month')) {
          res.push({content:false, bg:this.colors[colorIndex++], modifytime:note.modifytime});
          if(colorIndex>=colorLength) colorIndex = 0;
        }
        date = note.modifytime;
        note.content = true;
        note.bg = this.colors[colorIndex++];
        if(colorIndex>=colorLength) colorIndex = 0;
        res.push(note);
      }
    }
    return res;
  }


  // click
  OnItemClick(note) {
    this.itemClick.emit(note);
  }
  OnCreateNode(notebook) {
    this.createNote.emit(notebook);
  }
}
