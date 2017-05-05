//<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//import * as $ from 'jquery';
//window["$"] = $;
//window["jQuery"] = $;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
