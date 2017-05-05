/**
 * Created by jsen on 2017/4/9.
 */


import { Component } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {RouteableComponent} from "../RouteableComponent";


@Component({
  selector: 'ui-icons',
  templateUrl: './icons.html',
  styleUrls: ['./ui.style.scss']
})
export class UIIconsComponent extends RouteableComponent {
  constructor(private route: ActivatedRoute) {
    super(route);
    /*
    route.url.map(segments => segments.join('')).subscribe(txt => {
      this.SetIndicator(IDNMap.ids[txt])
    }).unsubscribe();
    */
  }
}
