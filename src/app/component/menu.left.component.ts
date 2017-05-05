/**
 * Created by jsen on 2017/4/9.
 */


import {Component} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {MenuMock} from "../mock/menu.mock";
import {MenuItem} from "../module/ui/menu.item";
import {ActivatedRoute} from "@angular/router";

declare var $:any;

@Component({
  moduleId: module.id,
  selector: 'left-menu',
  templateUrl: './menu.left.html',
  styleUrls: ['./menu.left.css'],
  animations: [
    trigger('heroState',
      [ state('inactive', style({ display: 'none', height:0})),
        state('active', style({ display:'block', height:'*'})),
        transition('inactive => active', animate('400ms')),
        transition('active => inactive', animate('400ms'))
      ]
    )
  ]
})
/*
*
 animations: [
 trigger('heroState',
 [ state('inactive', style({ backgroundColor: '#eee', transform: 'scale(1)' })),
 state('active', style({ backgroundColor: '#cfd8dc', transform: 'scale(1.1)' })),
 transition('inactive => active', [style({ backgroundColor: '#ff0000' }),animate('1000ms ease-in')]),
 transition('active => inactive', animate('1000ms ease-out'))
 ]
 )
 ]
* */
export class MenuLeftComponent {

  url:string = "dashboard";

  holder:string = 'inactive';


  menuList = [
    {
      'type':'container',
      'title':'面板',
      'icon':'fa-dashboard',
      'expand':true,
      'hover':false,
      'tips':[
        {'style':{'bg-green':true}, 'title':'new'}
      ],
      'child':[
        {'type':'content','title':'总览','link':'/chaos','icon':'fa-braille'},
        {'type':'content','title':'功能列表','link':'/testisotope','icon':'fa-code'}
      ]
    },
    {
      'type':'container',
      'title':'信息编辑',
      'icon':'fa-files-o',
      'expand':false,
      'hover':false,
      'tip':{
      },
      'child':[
        {'type':'content','title':'笔记','link':'/note','icon':'fa-sticky-note-o'},
        {'type':'content','title':'博客','link':'/blog','icon':'fa-rss'},
        {'type':'content','title':'编辑器1','link':'/sampleeditor','icon':'fa-pencil'},
        {'type':'content','title':'编辑器2','link':'/tet3','icon':'fa-pencil-square-o'}
      ]
    },
    {
      'type':'content',
      'title':'Widgets',
      'icon':'fa-th',
      'link':'/note',
      'tips':[
        {'style':{'bg-green':true}, 'title':'new'}
      ],
      'expand':false,
      'hover':false
    },
    {
      'type':'container',
      'title':'微服务',
      'icon':'fa-bandcamp',
      'expand':false,
      'hover':false,
      'child':[
        {'type':'content','title':' 监测','link':'/sampleeditor','icon':'fa-line-chart'},
        {'type':'content','title':' 项目','link':'/note','icon':'fa-sitemap'},
        {'type':'content','title':' 微服务模块','link':'/blog','icon':'fa-server'}
      ]
    },
    {
      'type':'container',
      'title':'UI库',
      'icon':'fa-laptop',
      'expand':false,
      'hover':false,
      'child':[
        {'type':'content','title':' General','link':'/note','icon':'fa-circle-o'},
        {'type':'content','title':' Icons','link':'/uiicons','icon':'fa-futbol-o'},
        {'type':'content','title':' Buttons','link':'/sampleeditor','icon':'fa-circle-o'},
        {'type':'content','title':' Sliders','link':'/tet3','icon':'fa-circle-o'},
        {'type':'content','title':' Timeline','link':'/tet3','icon':'fa-circle-o'},
        {'type':'content','title':' 登入','link':'/login','icon':'fa-circle-o'}
      ]
    },
    {
      'type':'container',
      'title':'设置',
      'icon':'fa-gg',
      'expand':false,
      'hover':false,
      'child':[
        {'type':'content','title':' 开发者工具','link':'/note','icon':'fa-space-shuttle'},
        {'type':'content','title':' 插件','link':'/blog','icon':'fa-tags'},
        {'type':'content','title':' 设置','link':'/sampleeditor','icon':'fa-cogs'}
      ]
    },
    {
      'type':'container',
      'title':'Tables',
      'icon':'fa-table',
      'expand':false,
      'hover':false,
      'child':[
        {'type':'content','title':' Simple tables','link':'/note','icon':'fa-circle-o'},
        {'type':'content','title':' Data tables','link':'/blog','icon':'fa-circle-o'}
      ]
    },
    {
      'type':'content',
      'title':'Calendar',
      'icon':'fa-calendar',
      'link':'/note',
      'tips':[
        {'style':{'bg-red':true}, 'title':'3'},
        {'style':{'bg-blue':true}, 'title':'17'}
      ],
      'expand':false,
      'hover':false
    },
    {
      'type':'container',
      'title':'Examples',
      'icon':'fa-folder',
      'expand':false,
      'hover':false,
      'child':[
        {'type':'content','title':' Invoice','link':'/note','icon':'fa-circle-o'},
        {'type':'content','title':' Profile','link':'/note','icon':'fa-circle-o'},
        {'type':'content','title':' Login','link':'/note','icon':'fa-circle-o'},
        {'type':'content','title':' Register','link':'/note','icon':'fa-circle-o'},
        {'type':'content','title':' Lockscreen','link':'/note','icon':'fa-circle-o'},
        {'type':'content','title':' 404 Error','link':'/note','icon':'fa-circle-o'},
        {'type':'content','title':' 500 Error','link':'/note','icon':'fa-circle-o'},
        {'type':'content','title':' Blank Page','link':'/note','icon':'fa-circle-o'},
        {'type':'content','title':' Pace Page','link':'/note','icon':'fa-circle-o'}
      ]
    },
    {
      'type':'container',
      'title':'Multilevel',
      'icon':'fa-share',
      'expand':false,
      'hover':false,
      'child':[
        {'type':'content','title':' Level One','link':'/note','icon':'fa-circle-o'},
        {'type':'container','title':' Level One','link':'/note','icon':'fa-circle-o',
          'child':[
              {'type':'content','title':' Level Two','link':'/note','icon':'fa-circle-o'},
              {'type':'container','title':' Level Two','link':'/note','icon':'fa-circle-o',
                'child':[
                  {'type':'content','title':' Level Three','link':'/note','icon':'fa-circle-o'},
                  {'type':'container','title':' Level Three','link':'/note','icon':'fa-circle-o'}
                ]
              }
            ]
        },
        {'type':'content','title':' Level One','link':'/note','icon':'fa-circle-o'}
      ]
    },
    {
      'type':'content',
      'title':'Documentation',
      'icon':'fa-book',
      'link':'/note',
      'tips':[
        {'style':{'bg-red':true}, 'title':'3'},
        {'style':{'bg-blue':true}, 'title':'17'}
      ],
      'expand':false,
      'hover':false
    }
  ]

  labelList = [
    {
      'title':'Important',
      'color':'text-red',
      'link':'/note'
    },
    {
      'title':'Warning',
      'color':'text-yellow',
      'link':'/note'
    },
    {
      'title':'Information',
      'color':'text-aqua',
      'link':'/note'
    }
  ]
  urlBase = "/jsen";
/*


<li><a href="documentation/index.html"><i class="fa fa-book"></i> <span>Documentation</span></a></li>
<li class="header">LABELS</li>
<li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
<li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
<li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>*/

  constructor(private route: ActivatedRoute) {
  }
  menus = MenuMock.LeftMenu;

  trackByMenuItem(index: number, item: MenuItem){return item._id}

  Onchange(rl) {
    this.url = rl;
  }

  OnContainerClick(menu,item,item0, force=true) {
    if(force && $('body').hasClass("sidebar-collapse")) {
      return;
    }
    let flag = menu.expand;
    let level = 0;
    if(item) {flag = item.expand;level = 1;}
    if(item0) {flag = item0.expand;level = 2;}


    if(!flag) {
      let menuList = this.menuList;
      menuList.forEach((i) => {
        i.expand = false;
      });
      menu.expand = true;
    } else {
      if(level <= 0)
        menu.expand = false;
    }
    if(item) {
      if(!flag) {
        menu.child.forEach((i) => {
          i.expand = false;
        });
        item.expand = true;
      } else {
        if(level <= 1)
          item.expand = false;
      }
    }
    if(item0) {
      if(!flag) {
        item.child.forEach((i) => {
          i.expand = false;
        });
        item0.expand = true;
      } else {
        if(level <= 2)
          item0.expand = false;
      }
    }
  }
  GetContainerStat(c) {
    return c.stat?c.stat:false;
  }
  OnLeftHover(menu) {
    if(!$('body').hasClass("sidebar-collapse")) {
      this.menuList.forEach(i => {
        i.hover = false;
      })
      return;
    }

    if(!menu.expand) {
      this.OnContainerClick(menu, false, false, false);
    }
    this.menuList.forEach(i => {
      i.hover = false;
    })
    menu.hover = true;
  }
}
