/**
 * Created by jsen on 2017/4/10.
 *
 * 显示notebook
 */


import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'note-notebook',
  templateUrl: './note.show.html',
  styleUrls: ['./fixfroala.css'],
  encapsulation: ViewEncapsulation.None
})
export class NoteShowComponent {
  @Input()
  content:string = "";
  @Input()
  title:string = "";

}
