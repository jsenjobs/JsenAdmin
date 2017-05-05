/**
 * Created by jsen on 2017/4/9.
 */



import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {NoteService} from "../../../service/note.service";
import {TNote} from "../../../module/tnote";
import {RouteableComponent} from "../../RouteableComponent";
import {Path} from "../../../module/ui/Path";
import {IDNMap} from "../../../app-indicator";
import {MAlert} from "../../../module/ui/MAlert";
let moment = require("moment");
let UUID = require('uuid');

@Component({
  templateUrl: './note.html',
  styleUrls:['./note.scss']
})
export class NoteComponent extends RouteableComponent implements OnInit{

  selectedNotebook:string = 'Default';

  selectedNoteData:string = '';
  selectedNoteTitle:string = '';

  noteList:TNote[];
  notebookList:string[];
  currentPage = 1;
  capacity = 20;

  constructor(private route: ActivatedRoute,private router: Router,private noteService: NoteService) {
    super(route);
    /*
    route.url.map(segments => segments.join('')).subscribe(txt => {
      this.SetIndicator(IDNMap.ids[txt])
    }).unsubscribe();
    */
  }

  // click
  public SearchNotes(key):void {
    this.router.navigate(['/noteAllNotes', {searchKey:key}]);
  }

  public AllNotes():void {
    this.router.navigate(['/jsen/noteAllNotes']);
  }

  public NewNote(mnc):void {
    mnc.createModal.show();
    // this.router.navigate(['/noteNewNote']);
  }
  public NewNote2(notebook, mnc) {
    mnc.ShowUseNotebook(notebook);
  }





  ngOnInit():void {
    this.fetchAll();
  }

  // notebook ->notelist(notemeta) -> notedata
  fetchAll() {
    this.fetchNotebook()
      .then((notebookList) => {
        if(notebookList.length>0) {
          this.selectedNotebook = notebookList[0];
        }
        return this.selectedNotebook;
      })
      .then((selectedNotebook) => this.fetchNoteList())
      .then((note) => this.fetchNoteData(note));
  }
  updateAll() {
    this.fetchNotebook()
      .then((notebookList) => this.fetchNoteList())
      .then((note) => this.fetchNoteData(note));
  }
  fetchNotebook() {
    return this.noteService.getNotebook().then(list => {
      this.notebookList = list;
      return list;
    });
  }

  fetchNoteList() {
    return this.noteService.getNotesPage(this.selectedNotebook, this.currentPage, this.capacity).then(
      notes => {
        this.noteList = notes;
        this.noteList.sort((a,b)=> {
          return moment(a.modifytime).isBefore(b.modifytime);
        });
        return this.noteList[0];
      }
    ).catch(e => console.error(e));
  }

  fetchNoteData(note) {
    console.log(note);
    if(note) {
      this.selectedNoteTitle = note.title;
      let url = note.url;
      this.noteService.fetchNoteData(url).then(notes => {
        this.selectedNoteData = notes;
        console.log(this.selectedNoteData)
      })
        .catch((e) => {
          this.Alert.emit(new MAlert("danger", e+'', 2000, 'show'));
        });
    }
  }

  saveNotedata(url, content) {
    this.noteService.saveNoteData(url, content).then(json => {
      if(json.code != 0) {
         this.Alert.emit(new MAlert("warning", json.code+":"+json.msg, 2000, 'show'));
      }
    });
  }

  /*
  fetchNoteData(url) {
    this.noteService.fetchNoteData(url).then(
      notes => this.selectedNoteData = notes,
      error => {
        this.Alert.emit({
          type: 'danger',
          msg: error+'',
          timeout: 1600
        });
      }
    );
  }
  */

  // click
  noteItemClick(note):void {
    // this.selectedNoteTitle = note.title;
    this.fetchNoteData(note);
  }
  ChangeNotebook(book) {
    this.selectedNotebook = book;
    this.updateAll();
  }

  // emit
  public HandleNewNote(params) {
    let title = params.title;
    let describe = params.describe;
    let content = params.content;
    let url = UUID.v1();
    let author = params.author;
    let notebook = params.notebook;
    this.noteService.saveNoteMeta(notebook, title, describe, url, author).then(json => {
      if(json.code == 0) {
        this.Alert.emit(new MAlert("success", `创建：`+title+`成功`, 2000, 'show'));
        this.fetchAll();
        this.saveNotedata(url, content);
      } else {
        this.Alert.emit(new MAlert("warning", json.code+":"+json.msg, 2000, 'show'));
      }
    });
  }

  public HandleDeleteNote(params) {
    let title = params.title;
    let url = params.url;
    let notebook = params.notebook;
    this.noteService.deleteNoteData(url).then(json => {
      if(json.code == 0) {
        this.Alert.emit(new MAlert("success", `删除：`+title+`内容成功`, 2000, 'show'));
        this.noteService.deleteNoteMeta(notebook, title).then(json => {
          if(json.code == 0) {
            this.Alert.emit(new MAlert("success", `删除：`+title+`元数据成功`, 2000, 'show'));
            this.fetchAll();
          } else {
            this.Alert.emit(new MAlert("warning", json.code+":"+json.msg, 2000, 'show'));
          }
        })
      } else {
        this.Alert.emit(new MAlert("warning", json.code+":"+json.msg, 2000, 'show'));
      }
    })
  }
  public emitAlert(alert) {
    this.Alert.emit(alert);
  }
}
