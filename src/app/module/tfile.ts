import {Links} from "./hal/links";
/**
 * Created by jsen on 2017/3/15.
 */


export class TFile {

  constructor (
    public tData: string = null,
    public tCreateby: string = null,
    public tCreateTime: string = null,
    public tDescribe: string = null,
    public tModifyby: string = null,
    public tModifyTime: string = null,
    public tName: string = null,
    public tSize: number = null,
    public type: string = null,
    public parent: string = null,
    public _links: Links = null
  ) {
  }

}
