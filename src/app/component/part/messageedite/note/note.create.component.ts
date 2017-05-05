/**
 * Created by jsen on 2017/4/10.
 */

import {Component, ViewChild, EventEmitter, Output, OnInit, Input} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/index";
import {NoteService} from "../../../../service/note.service";
import {RouteableComponent} from "../../../RouteableComponent";
import {ActivatedRoute} from "@angular/router";
import {MAlert} from "../../../../module/ui/MAlert";

@Component({
  selector: 'modal-note-create',
  templateUrl: './note.create.modal.html',
  styleUrls: ['./customfroala.css', './fixfroala.css', './edite.css', './form.css']
})
export class NoteCreateComponent extends RouteableComponent implements OnInit{
  @ViewChild('createModal')
  public createModal:ModalDirective;
  @Output() Sure: EventEmitter<any> = new EventEmitter();
  @Output() Cancel: EventEmitter<any> = new EventEmitter();

  title:string = '';
  describe:string = '';
  content:string = 'Write note here';
  author:string = '';
  @Input()
  notebookList:string[];
  notebook:string = '';

  constructor(private route: ActivatedRoute,private noteService: NoteService) {
    super(route);
  }
  ngOnInit():void {
    /*
    this.noteService.getNotebook().then(list => {
      this.notebookList = list;
      if(list.length>0) {
        this.notebook = list[0];
      }
    });
    */
  }

  public ShowUseNotebook(notebook):void {
    this.notebook = notebook;
    this.createModal.show();
  }
  // click
  OnSure() {
    if(!this.title || !this.describe || !this.content || this.title === '' || this.describe === '') {
      this.Alert.emit(new MAlert("danger", `参数错误`, 2000, 'show'));
      return;
    }
    this.createModal.hide();
    if(this.Sure) {
      this.Sure.emit({title:this.title,
        describe:this.describe, content:this.content,
        notebook:this.notebook, author:this.author});
    }
    this.clear();
  }
  OnCancel() {
    this.createModal.hide();
    this.Cancel.emit(null);
    this.clear();
  }
  clear() {
    this.title = '';
    this.describe = '';
    this.content = 'Write note here';
    this.author = '';
    this.notebook = '';
    if(this.notebookList.length>0) {
      this.notebook = this.notebookList[0];
    }
  }
}
