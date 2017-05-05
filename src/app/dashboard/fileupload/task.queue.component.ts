import {Component, Input} from "@angular/core";
import {FileUploader, Headers, FileItem} from 'ng2-file-upload';
/**
 * Created by jsen on 2017/3/15.
 */


@Component({
  selector: 'dashboard-fileupload-queue',
  templateUrl: './task.queue.html',
  styleUrls: [
    './task.queue.css'
  ]
})
export class FileUploadQueueComponent {
  @Input("uploader")
  uploader:FileUploader;
  @Input("currentPath")
  currentPath:string;


}
