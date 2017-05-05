/**
 * Created by jsen on 2017/4/10.
 */


import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {NoteService} from "../../../../service/note.service";
import {ActivatedRoute} from "@angular/router";
import {RouteableComponent} from "../../../RouteableComponent";
import { Location }               from '@angular/common';
import {Path} from "../../../../module/ui/Path";
import {Indicator} from "../../../../module/ui/Indicator";
import {Observable} from "rxjs/Rx";
import {IDNMap} from "../../../../app-indicator";
import {MAlert} from "../../../../module/ui/MAlert";

declare let $:any;

@Component({
  templateUrl: './note.edite.html',
  styleUrls: ['./customfroala.css', './fixfroala.css', './edite.css'],
  encapsulation: ViewEncapsulation.None
})

export class NoteEditeComponent extends RouteableComponent implements OnInit{



  title: string = '';
  describe: string = '';
  notebook: string = '';
  url: string = '';
  author: string = '';

  public editor;
  public editorConfig = {
    placeholder: "输入内容："
  };

  public froalaOptions: Object = {
    language: "zh_cn",
    placeholderText: '输入：',
    toolbarInline: false,
    toolbarVisibleWithoutSelection: true,
    charCounterCount: false,
    events: {
      'froalaEditor.initialized': function() {
        console.log('initialized');
      },
      'froalaEditor.focus' : function(e, editor) {
        console.log(editor.selection.get());
      },
      'froalaEditor.image.beforeUpload': function (e, editor, images) {
        console.log('beforeUpload');
      },
      'froalaEditor.image.uploaded':function (e, editor, response) {
        console.log(JSON.parse(response).code);
        return JSON.parse(response).code == 0;
      },
      'froalaEditor.image.inserted':function (e, editor, $img, response) {
        console.log('inserted');

      },
      'froalaEditor.image.replaced':function (e, editor, $img, response) {
        console.log('replaced');

      },
      'froalaEditor.image.error':function (e, editor, error, response) {
        console.log("error");
        console.log(error.code);

        // Bad link.
        if (error.code == 1) { }

        // No link in upload response.
        else if (error.code == 2) { }

        // Error during image upload.
        else if (error.code == 3) { }

        // Parsing response failed.
        else if (error.code == 4) { }

        // Image too text-large.
        else if (error.code == 5) { }
        // Invalid image type.
        else if (error.code == 6) { }
        // Image can be uploaded only to same domain in IE 8 and IE 9.
        else if (error.code == 7) { }
      }
    },
    // imageUploadParam: 'image_param',

    // Set the image upload URL.
    imageUploadURL: 'http://192.168.1.100:8080/iconserver/upload/upload',

    // Additional upload params.
    imageUploadParams: {path: '/note'},

    // Set request type.
    imageUploadMethod: 'POST',

    // Set max image size to 5MB.
    imageMaxSize: 5 * 1024 * 1024,

    // Allow to upload PNG and JPG.
    imageAllowedTypes: ['jpeg', 'jpg', 'png'],
    codeBeautifierOptions: {
      end_with_newline: true,
      indent_inner_html: true,
      extra_liners: "['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'pre', 'ul', 'ol', 'table', 'dl']",
      brace_style: 'expand',
      indent_char: ' ',
      indent_size: 4,
      wrap_line_length: 0
    },
    toolbarButtons:['fullscreen', 'print', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', '|', 'specialCharacters', 'color', 'emoticons', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'insertHR', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', 'undo', 'redo', 'clearFormatting', 'selectAll', 'html', '|', 'save']
  };

  private neContent: string;
  private initControls;


  constructor(private route: ActivatedRoute,private noteService: NoteService,private location: Location) {
    super(route);
    let self = this;
    // route.url.map(segments => segments.join('')).subscribe(txt => this.SetIndicator(IDNMap.ids[txt])).unsubscribe();
      $.FroalaEditor.DefineIcon('save', {NAME: 'save'});
      $.FroalaEditor.RegisterCommand('save', {
        title: '保存',
        focus: false,
        undo: false,
        refreshAfterCallback: false,
        callback: function () {
          self.onSave(false);
        }
      });

      $.FroalaEditor.DefineIcon('clear', {NAME: 'remove'});
      $.FroalaEditor.RegisterCommand('clear', {
        title: 'Clear HTML',
        focus: false,
        undo: true,
        refreshAfterCallback: true,
        callback: function () {
          this.html.set('');
          this.events.focus();
        }
      });

      $.FroalaEditor.DefineIcon('insert', {NAME: 'plus'});
      $.FroalaEditor.RegisterCommand('insert', {
        title: 'Insert HTML',
        focus: true,
        undo: true,
        refreshAfterCallback: true,
        callback: function () {
          this.html.insert('My New HTML');
        }
      });
  }
  ngOnInit():void {
    let params = this.route.snapshot.queryParams;
    this.title = params['title'];
    this.describe = params['describe'];
    this.notebook = params['notebook'];
    this.url = params['url'];
    this.author = params['author'];

    this.fetchData(params['url']);
  }

  // click
  onSave(back = true) {

    this.noteService.saveNoteData(this.url, this.neContent).then(json => {
      if(json.code == 0) {
        this.Alert.emit(new MAlert("success", `保存：  <strong>`+this.title+`</strong>  成功`, 2000, 'show'));
        this.noteService.updateNoteMeta(this.notebook, this.title, this.describe, this.url, this.author).then(json => {
          if(json.code == 0) {
            this.Alert.emit(new MAlert("success", `保存元数据：  <strong>`+this.title+`</strong>  成功`, 2000, 'show'));
          } else {
            this.Alert.emit(new MAlert("danger", json.code+":"+json.msg, 2000, 'show'));
          }
        });
        if(back)
          this.goBack();
      } else {
        this.Alert.emit(new MAlert("danger", json.code+":"+json.msg, 2000, 'show'));
      }
    })
  }

  fetchData(url):void {

    this.noteService.fetchNoteData(url).then(
      notes => {
        this.neContent = notes;
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}
