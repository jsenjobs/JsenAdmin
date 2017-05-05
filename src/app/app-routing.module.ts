/**
 * Created by jsen on 2017/4/9.
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FileUploadComponent} from "./dashboard/fileupload.component";
import {TestIsotopeComponent} from "./dashboard/test/test.isotope.component";
import {FunctionNoteComponent} from "./component/functions/function.note.component";
import {Tet3} from "./component/functions/tet3";
import {Tet2} from "./component/functions/tet2";
import {Tet1} from "./component/functions/tet1";
import {BlogComponent} from "./component/part/messageedite/blog.component";
import {NoteComponent} from "./component/part/messageedite/note.component";
import {NoteAllComponent} from "./component/part/messageedite/note/note.all.component";
import {NoteEditeComponent} from "./component/part/messageedite/note/note.edite.component";
import {NoteDetailComponent} from "./component/part/messageedite/note/note.detail.component";
import {UIIconsComponent} from "./component/ui/icons.component";
import {ContentComponent} from "./level/content.component";
import {LoginComponent} from "./component/user/login.component";



const routes: Routes = [
  { path: '', redirectTo: '/jsen/chaos', pathMatch: 'full' },
  { path: 'chaos',  component: FileUploadComponent },
  { path: 'testisotope',  component: TestIsotopeComponent },
  { path: 'sampleeditor',  component: FunctionNoteComponent },
  { path: 'blog',  component: BlogComponent },

  { path: 'note',  component: NoteComponent },
  { path: 'noteAllNotes',  component: NoteAllComponent },
  { path: 'noteedite',  component: NoteEditeComponent },
  { path: 'noteshowdetail',  component: NoteDetailComponent },

  { path: 'tet1',  component: Tet1 },
  { path: 'tet2',  component: Tet2 },
  { path: 'tet3',  component: Tet3 },

  
  { path: 'uiicons',  component: UIIconsComponent },
];

const appRoutes:Routes = [
  { path: '', redirectTo: '/jsen', pathMatch: 'full'},
  { path: 'jsen', component: ContentComponent, children: routes},
  { path: 'login', component: LoginComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
