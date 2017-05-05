import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {TFile} from "../module/tfile";
import {RestApis} from "../constant/RestApis";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
/**
 * Created by jsen on 2017/3/15.
 *
 * 获取文件服务
 *
 * 上传文件服务
 */
declare var $:any;


@Injectable()
export class FileService {

  private fileListUrl;
  private dirCreateUrl;
  constructor (
    private http: Http
  ) {
    this.fileListUrl = RestApis.fileListUrl;
    this.dirCreateUrl = RestApis.dirCreateUrl;
  }

  getAllFiles(parentPath:string): Promise<TFile[]> {
    return this.http.get(this.fileListUrl+"?uuid="+parentPath)
      .toPromise()
      .then(this.extraFileData)
      .catch(this.handleError);
  }

  createDirectory(name:string, path:string, createby:string):Promise<TFile[]> {
    /*
    *  return this.http.get(queryUrl)
     .map((response: Response) => {
     return (<any>response.json()).items.map(item => {
     // console.log("raw item", item); // uncomment if you want to debug
     return new SearchResult({
     id: item.id.videoId,
     title: item.snippet.title,
     description: item.snippet.description,
     thumbnailUrl: item.snippet.thumbnails.high.url
     }); });
     });
    * */
//'Content-Type': 'application/json;charset=UTF-8',

    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'});

    let options = new RequestOptions({ headers: headers });
    let params = new URLSearchParams();
    params.set("name", name);
    params.set("path", path);
    params.set("createby", createby);

    return this.http.post(this.dirCreateUrl
      , params,
      options
    ).toPromise()
      .then(this.extraFileData)
      .catch(this.handleError);

    /*
    return this.http.post(this.dirCreateUrl
      , params,
      options
    ).map((res:any) => {
      return res.json();
    });
    */
    /*
    $.ajax({
      type: 'POST',
      url: this.dirCreateUrl,
      data: {name:name,path:path,createby:createby},
      success: function (data) {
        if(success) success();
        console.log(data);
      },
      error: function () {
        if(error) error();
        console.log('error');
      }
    })*/
  }

  private extraFileData(response: Response) {
    return response.json()._embedded['filelist'];
  }

  private handleError (error: any) {
    let msg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'unknown error';
    console.error(msg); // log to console instead
    return Promise.reject(msg);
  }
}
