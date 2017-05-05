
export class MAlert {
  constructor (
    public type: string = "warning",
    public msg: string = '',
    public timeout:number = 1200,
    public stat:string = 'show'
  ) {
  }
  autoDismiss() {
  	return new Promise((resolve, reject) => {
  		setTimeout(()=>{
  			if(this) {
  				resolve(this.msg)
  			} else {
  				reject('reject');
  			}
  		}, this.timeout);
  	});
  }

}
