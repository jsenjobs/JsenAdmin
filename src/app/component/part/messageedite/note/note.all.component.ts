/**
 * Created by jsen on 2017/4/10.
 */


import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NoteService} from "../../../../service/note.service";
import { ModalDirective } from 'ngx-bootstrap/modal';
import {ActivatedRoute} from "@angular/router";
let moment = require('moment');

@Component({
  selector: 'note-all-note',
  templateUrl: './note.all.html',
  styleUrls:['./note.all.css']
})
export class NoteAllComponent implements OnInit, OnDestroy {
  @ViewChild('deleteModal')
  public modalDelete:ModalDirective;
  @ViewChild('modifyModal')
  public modifyDelete:ModalDirective;

  noteList;
  currentSelectNote = {};
  currentPage = 1;
  capacity = 20;
  capacityS = [20, 40, 60, 100, 1000];

  searchKey = '';
  constructor(private route: ActivatedRoute,private noteService: NoteService) {

  }

  GetFilteredData() {
    if(this.searchKey && this.searchKey!=='') {
      let newNoteList = [];
      for(let i = 0; i < this.noteList.length; i++) {
        if(this.noteList[i].title.indexOf(this.searchKey)>=0) {
          newNoteList.push(this.noteList[i]);
        }
      }
      return newNoteList;
    } else {
      return this.noteList;
    }
  }

  GetCapacityS() {
    let cpS = [];
    for(let i = 0; i < this.capacityS.length; i++) {
      if(this.capacityS[i] !== this.capacity) {
        cpS.push(this.capacityS[i]);
      }
    }
    return cpS;
  }

  OnCapacityChange(capacity) {
    this.capacity = capacity;
    this.currentPage = 1;
    this.GetData();
  }

  GetData() {
    console.log();
    console.error(moment("2010-10-20 4:30",       "YYYY-MM-DD HH:mm"));
    this.noteService.getNotesPageAll(this.currentPage, this.capacity).then(
      notes => {
        this.noteList = notes;
        let params = this.route.snapshot.params;
        this.searchKey = params['searchKey'];
        if(!this.searchKey) {
          this.searchKey = '';
        }
      },
      error => console.error(error)
    );
  }

  ngOnInit():void {
    this.GetData();
  }

  ngOnDestroy():void {
  }

  // click
  public deleteSure():void {
    this.hideDeleteModal();
  }

  public showDeleteModal(index):void {
    this.currentSelectNote = this.noteList[index];
    this.modalDelete.show();
  }

  public hideDeleteModal():void {
    this.modalDelete.hide();
  }

  public modifySure():void {
    this.hideModifyModal();
  }

  public showModifyModal(index):void {
    this.currentSelectNote = this.noteList[index];
    this.modifyDelete.show();
  }

  public hideModifyModal():void {
    this.modifyDelete.hide();
  }

  public LinkClick(href) {
    console.log(href);
  }
}
