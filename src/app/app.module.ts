import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FileUploadModule } from 'ng2-file-upload';

import { QuillEditorModule } from 'ng2-quill-editor';

import { AppComponent } from './app.component';
import {MenuLeftComponent} from "./component/menu.left.component";
import {FileUploadComponent} from "./dashboard/fileupload.component";
import {FileUploadQueueComponent} from "./dashboard/fileupload/task.queue.component";
import {FileService} from "./service/file.service";
import {TestIsotopeComponent} from "./dashboard/test/test.isotope.component";
import {MenuHeaderComponent} from "./component/menu.header.component";
import {MenuSideComponent} from "./component/menu.side.component";
import {FooterComponent} from "./component/footer.component";
import {AppRoutingModule} from "./app-routing.module";
import {FunctionNoteComponent} from "./component/functions/function.note.component";
import {Tet3} from "./component/functions/tet3";
import {Tet1} from "./component/functions/tet1";
import {Tet2} from "./component/functions/tet2";
import {BlogComponent} from "./component/part/messageedite/blog.component";
import {NoteComponent} from "./component/part/messageedite/note.component";
import {NoteShowComponent} from "./component/part/messageedite/note/note.show.component";
import {NoteTimelineComponent} from "./component/part/messageedite/note/note.timeline.component";
import {NoteAllComponent} from "./component/part/messageedite/note/note.all.component";
import {NoteCreateComponent} from "./component/part/messageedite/note/note.create.component";
import {NoteEditeComponent} from "./component/part/messageedite/note/note.edite.component";
import {UIIconsComponent} from "./component/ui/icons.component";
import {FroalaViewModule, FroalaEditorModule} from "angular2-froala-wysiwyg/index";
import {NoteDetailComponent} from "./component/part/messageedite/note/note.detail.component";
import {HeaderIndicatorComponent} from "./component/header.indicator.component";
import {NoteService} from "./service/note.service";
import {ModalModule, AlertModule} from "ngx-bootstrap/index";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginComponent} from "./component/user/login.component";
import {ContentComponent} from "./level/content.component";

@NgModule({
  declarations: [
    ContentComponent,
    AppComponent,
    MenuLeftComponent,
    MenuHeaderComponent,
    MenuSideComponent,
    FooterComponent,
    HeaderIndicatorComponent,
    BlogComponent,

    NoteComponent,
    NoteCreateComponent,
    NoteTimelineComponent,
    NoteAllComponent,
    NoteShowComponent,
    NoteEditeComponent,
    NoteDetailComponent,
    UIIconsComponent,
    LoginComponent,

    FileUploadComponent,
    FileUploadQueueComponent,
    TestIsotopeComponent,
    FunctionNoteComponent,
    Tet1,
    Tet2,
    Tet3,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FileUploadModule,
    AppRoutingModule,
    QuillEditorModule,
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [

    FileService,
    NoteService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
