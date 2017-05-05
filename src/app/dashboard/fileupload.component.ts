import {Component, OnInit, OnDestroy} from "@angular/core";
import {FileUploader, FileItem} from 'ng2-file-upload';
import {FileService} from "../service/file.service";
import {Subscription} from "rxjs/Rx";
import {TFile} from "../module/tfile";
import {RestApis} from "../constant/RestApis";
import {RouteableComponent} from "../component/RouteableComponent";
import {ActivatedRoute} from "@angular/router";

/**
 * Created by jsen on 2017/3/14.
 */

declare var $:any;

@Component({
  selector: 'dashboard-fileupload',
  templateUrl: './fileupload.html',
  styleUrls: [
    './fileupload.css'
  ]
})
export class FileUploadComponent extends RouteableComponent implements OnInit, OnDestroy {

  title = 'app works!';

  dataList = [
    {data_cat:'logo',img:'assets/test/img/portfolios/logo/5.jpg',text_title:'Bird Document',text_category:'Logo'},
    {data_cat:'app',img:'assets/test/img/portfolios/app/1.jpg',text_title:'Visual Infography',text_category:'APP'},
    {data_cat:'web',img:'assets/test/img/portfolios/web/4.jpg',text_title:"Sonor's Design",text_category:'Web design'},
    {data_cat:'card',img:'assets/test/img/portfolios/card/1.jpg',text_title:'Typography Company',text_category:'Business card'},
    {data_cat:'app',img:'assets/test/img/portfolios/app/3.jpg',text_title:'Weatherette',text_category:'APP'},
    {data_cat:'card',img:'assets/test/img/portfolios/card/4.jpg',text_title:'BMF',text_category:'Business card'},
    {data_cat:'card',img:'assets/test/img/portfolios/card/5.jpg',text_title:'Techlion',text_category:'Business card'},
    {data_cat:'logo',img:'assets/test/img/portfolios/logo/1.jpg',text_title:'KittyPic',text_category:'Logo'},
    {data_cat:'app',img:'assets/test/img/portfolios/app/2.jpg',text_title:'Graph Plotting',text_category:'APP'},
    {data_cat:'card',img:'assets/test/img/portfolios/card/2.jpg',text_title:'QR Quick Response',text_category:'Business card'},
    {data_cat:'logo',img:'assets/test/img/portfolios/logo/6.jpg',text_title:'Mobi Sock',text_category:'Logo'},
    {data_cat:'logo',img:'assets/test/img/portfolios/logo/7.jpg',text_title:'Village Community Church',text_category:'Logo'},
    {data_cat:'icon',img:'assets/test/img/portfolios/icon/4.jpg',text_title:"Domino's Pizza",text_category:'Icon'},
    {data_cat:'web',img:'assets/test/img/portfolios/web/3.jpg',text_title:"Backend Admin",text_category:'Web design'},
    {data_cat:'icon',img:'assets/test/img/portfolios/icon/1.jpg',text_title:"Instagram",text_category:'Icon'},
    {data_cat:'web',img:'assets/test/img/portfolios/web/2.jpg',text_title:"Student Guide",text_category:'Web design'},
    {data_cat:'icon',img:'assets/test/img/portfolios/icon/2.jpg',text_title:"Scoccer",text_category:'Icon'},
    {data_cat:'icon',img:'assets/test/img/portfolios/icon/5.jpg',text_title:"3D Map",text_category:'Icon'},
    {data_cat:'web',img:'assets/test/img/portfolios/web/1.jpg',text_title:"Note",text_category:'Web design'},
    {data_cat:'logo',img:'assets/test/img/portfolios/logo/3.jpg',text_title:'Native Designers',text_category:'Logo'},
    {data_cat:'logo',img:'assets/test/img/portfolios/logo/4.jpg',text_title:'Bookworm',text_category:'Logo'},
    {data_cat:'icon',img:'assets/test/img/portfolios/icon/3.jpg',text_title:"Sandwich",text_category:'Icon'},
    {data_cat:'card',img:'assets/test/img/portfolios/card/3.jpg',text_title:'Reality',text_category:'Business card'},
    {data_cat:'logo',img:'assets/test/img/portfolios/logo/2.jpg',text_title:'Speciallisterne',text_category:'Logo'}
  ];

  public uploader:FileUploader = new FileUploader({url: RestApis.fileUploadUrl});

  // subscription: Subscription;
  files: TFile[];
  currentPath:string = "/root";
  author:string = "jsen";

  selectedItem:TFile = new TFile();


  constructor(private route: ActivatedRoute, private fileService: FileService) {
    super(route);
    var self = this;
    this.selectedItem.type='folder-orange';
    this.uploader.onBuildItemForm = function(fileItem: FileItem, form: any): any {
      form.append("path", self.currentPath);
      form.append("createby", self.author);
    }
  }

  ngOnInit():void {

    /*
    this.fileService.getAllFiles(this.currentPath).then(
      files => {
        console.log(files);
        this.files = files;
        this.filterFiles();
      },
      error => console.error(error)
    );
    */


  }

  ngOnDestroy():void {
    // this.subscription.unsubscribe();
  }

  private filterFiles():void {
    $(function () {
      var filterList = {
        init: function () {
          // MixItUp plugin
          $('#gallery').mixitup({
            targetSelector: '.item',
            filterSelector: '.filter',
            effects: ['fade'],
            easing: 'snap',

            // call the hover effect

            onMixEnd: filterList.hoverEffect()
          });
        },
        hoverEffect: function () {
          // Simple parallax effect
          $('#gallery img').hover(
            function () {
              $(this).parent().find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
              $(this).parent().find('img').stop().animate({top: -30}, 500, 'easeOutQuad');
            },
            function () {
              $(this).parent().find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
              $(this).parent().find('img').stop().animate({top: 0}, 300, 'easeOutQuad');
            }
          );
        }



      };
      // Run the show!
      filterList.init();
    });
  }

  public createDirectory(name:HTMLInputElement) {
    // console.error(`${name.value}`);
    var self = this;
    /*
    this.fileService.createDirectory(name.value, this.currentPath, this.author).then(files=>{
      console.log(files);
      if (files) {
        files.forEach(item => {
          self.files.push(item);
        })
      }
      this.filterFiles();
      $('#modal-create-folder').modal('hide');
    });
    */
    /*
    this.fileService.createDirectory(name.value, this.currentPath, this.author).subscribe(data => {
      if(data && data.code === 0) {
        var tFileInfos:TFile[] = data._embedded['filelist'];
        if (tFileInfos) {
          tFileInfos.forEach(item => {
            self.files.push(item);
          })
        }
        var $container = $('#gallery').isotope();

        $('#filters a').click(function() {
          var selector = $(this).attr('data-filter');
          $container.isotope({filter: selector});
          return false;
        });
        $container.isotope({filter:"*"});

        $('#modal-create-folder').modal('hide');

      }
    });*/
    return true;
  }

  public showModal(t_file) {
    this.selectedItem = t_file;
    // $("#myModal img").attr('src', "assets/img/icon/icon-"+t_file.type+".png");

    $('#myModal').modal('show');
  }
}
