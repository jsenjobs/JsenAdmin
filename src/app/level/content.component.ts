import { Component } from '@angular/core';
import {Indicator} from "../module/ui/Indicator";
import {trigger, state, style, transition, animate} from '@angular/animations';
import {RouteableComponent} from "../component/RouteableComponent";

@Component({
  selector: 'content-root',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [
    trigger('alertShow',
      [ state('*', style({ transform:'translateY(-100%)'})),
        state('show', style({ transform:'translateY(0%)'})),
        transition('* => show', animate('130ms')),
        transition('show => *', animate('130ms')),
      ]
    )
  ]
})
export class ContentComponent {
  title = 'app works!';

  public alerts: any = [];
  lastAdd = -1000;
  private minDelay:number = 500;
  indicator:Indicator;

  public onActivate(event) {
    if(event instanceof RouteableComponent) {
      event.Alert.subscribe((alert) => {
        let time = new Date().getTime();
        let delay = time - this.lastAdd;
        if(delay>this.minDelay || delay<0) {
          delay = 0;
        } else {
          delay = this.minDelay - delay;
        }
        setTimeout(()=> {
          // dismiss All imi
          let ps = [];
          this.alerts.forEach(aItem=>{
            ps.push(this.delayRemove(this.alerts, aItem, 120));
          })
          Promise.all(ps).then(vs => {
            this.lastAdd = new Date().getTime();
            this.alerts.push(alert);
            return alert.autoDismiss();
          }).then(() => this.delayRemove(this.alerts, alert, 120))

        }, delay)
      });
      this.indicator = event.GetIndicator();
    }
  }

 delayRemove(alerts, alert, delay) {
    alert.stat = 'destroy';
   return new Promise((resolve, reject) => {
     setTimeout(()=>{
       for(var i=0; i<alerts.length; i++) {
          if(alerts[i] == alert) {
            alerts.splice(i, 1);
            break;
          }
        }
        resolve(1);
     }, delay)
   })
 }
}
