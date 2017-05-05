import {Path} from "./Path";
/**
 * Created by jsen on 2017/4/22.
 */


export class Indicator {

  constructor (
    public title: string = "JsenAdmin",
    public subTitle: string = "",
    public paths: Path[] = [],
  ) {
  }

}
