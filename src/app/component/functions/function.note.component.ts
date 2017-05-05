/**
 * Created by jsen on 2017/4/9.
 *
 * 笔记编辑器
 */

import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'quill-example-02',
  templateUrl: './function.note.html',
  styles: [
    `
     .quill-editor {
       min-height: 16em;
       max-height: 20em;
       overflow-y: auto;
     }
     .preview {
       min-height: 10em;
       max-height: 16em;
       overflow-y: auto;
       border: 1px solid #eee;
       border-top: none;
     }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class FunctionNoteComponent {

  public editor;
  public editorContent = `<h3>输入内容：</h3>`;
  public editorConfig = {
    placeholder: "输入内容："
  };

  constructor() {}

  onEditorBlured(quill) {
    console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    console.log('quill content is changed!', quill, html, text);
  }

  ngOnInit() {
    /*
    setTimeout(() => {
      this.editorContent = '<h1>Example 02 changed!</h1>';
      console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable();
    }, 2800)
    */
  }
}
