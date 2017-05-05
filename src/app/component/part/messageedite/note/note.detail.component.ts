/**
 * Created by jsen on 2017/4/10.
 */


import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {RouteableComponent} from "../../../RouteableComponent";
import {ActivatedRoute} from "@angular/router";
import {NoteService} from "../../../../service/note.service";
import { Location }               from '@angular/common';

@Component({
  selector: 'note-show-detail',
  templateUrl: './note.detail.html',
  styleUrls: ['./fixfroala.css'],
  encapsulation: ViewEncapsulation.None
})
export class NoteDetailComponent extends RouteableComponent implements OnInit {
  content:string = "";
  title:string = "";
  describe:string = "";

  constructor(private route: ActivatedRoute,private noteService: NoteService,private location: Location) {
    super(route);
  }
  ngOnInit():void {
    let params = this.route.snapshot.params;
    this.title = params['title'];
    this.describe = params['describe'];

    this.fetchData(params['url']);
  }

  fetchData(url):void {

    this.noteService.fetchNoteData(url).then(
      notes => {
        this.content = notes;
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
