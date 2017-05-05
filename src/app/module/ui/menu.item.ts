/**
 * Created by jsen on 2017/4/9.
 */

export class MenuItem {

  constructor (
    public _id: number = null,
    public type: string = "hiden",
    public css: string = null,
    public name: string = null,
    public href: string = null,
    public children: MenuItem[] = []
  ) {
  }

}
