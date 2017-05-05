/**
 * Created by jsen on 2017/4/10.
 */



import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Indicator} from "../module/ui/Indicator";
import {Path} from "../module/ui/Path";

@Component({
  selector: 'header-indicator',
  templateUrl: './header.indicator.html'
})
export class HeaderIndicatorComponent {
  @Input()
  indicator:Indicator;
  @Output()
  public ePathChange: EventEmitter<string> = new EventEmitter();


  getIndicator() {
    if(this.indicator) {
      return this.indicator;
    }
    let paths = [];
    paths.push(new Path("JsenAdmin", ""));
    this.indicator = new Indicator("JsenAdmin", "", paths);
    return this.indicator;
  }

  // click
  OnItemClick(url) {
    this.ePathChange.emit(url);
  }
}
