/**
 * Created by jsen on 2017/3/15.
 */


export class TNote {

  constructor (
    public _id: string = null,
    public title: string = null,
    public describe: string = null,
    public url: string = null,
    public modifytime: Date = null,
    public createtime: Date = null,
    public author : string = '',
    public notebook : string = null
  ) {
  }

}
