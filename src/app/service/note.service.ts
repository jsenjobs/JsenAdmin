/**
 * Created by jsen on 2017/4/19.
 */

import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {RestApis} from "../constant/RestApis";
import 'rxjs/add/operator/map';
import {TNote} from "../module/tnote";
import {resolve} from "url";
import {Observable} from "rxjs/Rx";

/**
 * Created by jsen on 2017/3/15.
 *
 * 获取文件服务
 *
 * 上传文件服务
 */
declare var $:any;


@Injectable()
export class NoteService {

  private notebookUrl;
  private noteListUrl;
  private noteListAllUrl;
  private dirCreateUrl;
  private fetchNoteDataUrl;
  private saveNoteDataUrl;
  private saveNoteMetaUrl;
  private updateNoteMetaUrl;
  private deleteNoteDataUrl;
  private deleteNoteMetaUrl;
  constructor (
    private http: Http
  ) {
    this.notebookUrl = RestApis.notebookUrl;
    this.noteListAllUrl = RestApis.noteListAllUrl;
    this.noteListUrl = RestApis.noteListUrl;
    this.dirCreateUrl = RestApis.dirCreateUrl;
    this.fetchNoteDataUrl = RestApis.fetchNoteDataUrl;
    this.saveNoteDataUrl = RestApis.saveNoteDataUrl;
    this.saveNoteMetaUrl = RestApis.saveNoteMetaUrl;
    this.updateNoteMetaUrl = RestApis.updateNoteMetaUrl;
    this.deleteNoteDataUrl = RestApis.deleteNoteDataUrl;
    this.deleteNoteMetaUrl = RestApis.deleteNoteMetaUrl;
  }

  getNotebook(): Promise<string[]> {
    // console.log(this.noteListUrl+"/"+page+"/"+capacity);
    return this.http.get(this.notebookUrl)
      .toPromise()
      .then(this.extraJson)
      .then(json => {
        if(json.code == 0) {
          return json.data;
        }
        return [];
      })
      .catch(this.handleError);
  }

  getNotesPageAll(page:number=1, capacity:number=20): Promise<TNote[]> {
    // console.log(this.noteListUrl+"/"+page+"/"+capacity);
    return this.http.get(this.noteListAllUrl+"/"+page+"/"+capacity)
      .toPromise()
      .then(this.extraNoteList)
      .catch(this.handleError);
  }

  getNotesPage(notebook:string, page:number=1, capacity:number=20): Promise<TNote[]> {
    // console.log(this.noteListUrl+"/"+page+"/"+capacity);
    return this.http.get(this.noteListUrl+"/"+notebook+"/"+page+"/"+capacity)
      .toPromise()
      .then(this.extraNoteList)
      .catch(this.handleError);
  }

  saveNoteMeta(notebook:string, title:string, describe:string, url:string, author:string) : Promise<any> {
    return this.http.post(this.saveNoteMetaUrl, {notebook:notebook,title:title, describe:describe, url:url,author:author})
      .toPromise()
      .then(this.extraJson)
      .catch(() => {
        return {code:500, msg:'数据转换错误'};
      });
  }
  updateNoteMeta(notebook:string, title:string, describe:string, url:string, author:string) : Promise<any> {
    return this.http.post(this.updateNoteMetaUrl, {notebook:notebook,title:title, describe:describe, url:url,author:author})
      .toPromise()
      .then(this.extraJson)
      .catch(() => {
        return {code:500, msg:'数据转换错误'};
      });
  }
  deleteNoteMeta(notebook, title):Promise<any> {
    return this.http.get(this.deleteNoteMetaUrl+"/"+notebook+"/"+title)
      .toPromise()
      .then(this.extraJson);
  }


  private extraNoteList(response: Response) {
    return response.json().data;
  }


  // note data
  fetchNoteData(noteName):Promise<any> {
    return this.http.get(this.fetchNoteDataUrl+"/"+noteName)
      .toPromise()
      .then(this.extraText)
      .catch(this.handleError);
  }

  saveNoteData(noteName, data) {
    return this.http.post(this.saveNoteDataUrl, {strName:noteName, str:data})
      .toPromise()
      .then(this.extraJson)
      .catch(this.handleError);
  }
  deleteNoteData(noteName):Promise<any> {
    return this.http.get(this.deleteNoteDataUrl+"/"+noteName)
      .toPromise()
      .then(this.extraJson);
  }

  private extraJson(response: Response) {
    return response.json();
  }


  private extraText(response: Response) {
    return new Promise((resolve, reject) => {
      resolve(response.json());
    })
      .then(()=>{return ""})
      .catch((e) => {
      console.log('extra text');
      return response.text();
    });
  }


  private handleError (error: any) {
    let msg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'unknown error';
    console.error(msg); // log to console instead
    return Promise.reject(msg);
  }
}
