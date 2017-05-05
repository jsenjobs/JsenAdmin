import {Output, EventEmitter} from '@angular/core';
import {Indicator} from "../module/ui/Indicator";
import {ActivatedRoute} from "@angular/router/router";
import {IDNMap} from "../app-indicator";
import {MAlert} from "../module/ui/MAlert";
/**
 * Created by jsen on 2017/4/20.
 *
 *
 * outlet下支持弹出alert提示
 */

var indicator: Indicator = new Indicator();
export class RouteableComponent {
  @Output()
  public Alert: EventEmitter<MAlert> = new EventEmitter();

  constructor(route: ActivatedRoute) {
    route.url.map(segments => segments.join('')).subscribe(url => this.SetIndicator(IDNMap.ids[url])).unsubscribe();
  }

  GetIndicator() {
    return indicator;
  }
  protected SetIndicator(id) {
    indicator = id;
  }
}
