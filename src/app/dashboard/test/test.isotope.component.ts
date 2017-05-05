import {Component, OnInit} from "@angular/core";
/**
 * Created by jsen on 2017/3/16.
 */

declare var $:any;

@Component({
  selector: 'test-isotope',
  templateUrl: './test.isotope.html',
  styleUrls: ['./test.isotope.css']
})
export class TestIsotopeComponent implements OnInit{

  dataList = [
    {data_cat:'logo',img:'static/jsenadmin-ui/img/easing/portfolios/logo/5.jpg',text_title:'Bird Document',text_category:'Logo'},
    {data_cat:'app',img:'static/jsenadmin-ui/img/easing/portfolios/app/1.jpg',text_title:'Visual Infography',text_category:'APP'},
    {data_cat:'web',img:'static/jsenadmin-ui/img/easing/portfolios/web/4.jpg',text_title:"Sonor's Design",text_category:'Web design'},
    {data_cat:'card',img:'static/jsenadmin-ui/img/easing/portfolios/card/1.jpg',text_title:'Typography Company',text_category:'Business card'},
    {data_cat:'app',img:'static/jsenadmin-ui/img/easing/portfolios/app/3.jpg',text_title:'Weatherette',text_category:'APP'},
    {data_cat:'card',img:'static/jsenadmin-ui/img/easing/portfolios/card/4.jpg',text_title:'BMF',text_category:'Business card'},
    {data_cat:'card',img:'static/jsenadmin-ui/img/easing/portfolios/card/5.jpg',text_title:'Techlion',text_category:'Business card'},
    {data_cat:'logo',img:'static/jsenadmin-ui/img/easing/portfolios/logo/1.jpg',text_title:'KittyPic',text_category:'Logo'},
    {data_cat:'app',img:'static/jsenadmin-ui/img/easing/portfolios/app/2.jpg',text_title:'Graph Plotting',text_category:'APP'},
    {data_cat:'card',img:'static/jsenadmin-ui/img/easing/portfolios/card/2.jpg',text_title:'QR Quick Response',text_category:'Business card'},
    {data_cat:'logo',img:'static/jsenadmin-ui/img/easing/portfolios/logo/6.jpg',text_title:'Mobi Sock',text_category:'Logo'},
    {data_cat:'logo',img:'static/jsenadmin-ui/img/easing/portfolios/logo/7.jpg',text_title:'Village Community Church',text_category:'Logo'},
    {data_cat:'icon',img:'static/jsenadmin-ui/img/easing/portfolios/icon/4.jpg',text_title:"Domino's Pizza",text_category:'Icon'},
    {data_cat:'web',img:'static/jsenadmin-ui/img/easing/portfolios/web/3.jpg',text_title:"Backend Admin",text_category:'Web design'},
    {data_cat:'icon',img:'static/jsenadmin-ui/img/easing/portfolios/icon/1.jpg',text_title:"Instagram",text_category:'Icon'},
    {data_cat:'web',img:'static/jsenadmin-ui/img/easing/portfolios/web/2.jpg',text_title:"Student Guide",text_category:'Web design'},
    {data_cat:'icon',img:'static/jsenadmin-ui/img/easing/portfolios/icon/2.jpg',text_title:"Scoccer",text_category:'Icon'},
    {data_cat:'icon',img:'static/jsenadmin-ui/img/easing/portfolios/icon/5.jpg',text_title:"3D Map",text_category:'Icon'},
    {data_cat:'web',img:'static/jsenadmin-ui/img/easing/portfolios/web/1.jpg',text_title:"Note",text_category:'Web design'},
    {data_cat:'logo',img:'static/jsenadmin-ui/img/easing/portfolios/logo/3.jpg',text_title:'Native Designers',text_category:'Logo'},
    {data_cat:'logo',img:'static/jsenadmin-ui/img/easing/portfolios/logo/4.jpg',text_title:'Bookworm',text_category:'Logo'},
    {data_cat:'icon',img:'static/jsenadmin-ui/img/easing/portfolios/icon/3.jpg',text_title:"Sandwich",text_category:'Icon'},
    {data_cat:'card',img:'static/jsenadmin-ui/img/easing/portfolios/card/3.jpg',text_title:'Reality',text_category:'Business card'},
    {data_cat:'logo',img:'static/jsenadmin-ui/img/easing/portfolios/logo/2.jpg',text_title:'Speciallisterne',text_category:'Logo'}
    ]
  ngOnInit():void {
    this.init();
  }

  init() {
    $(function () {



      var filterList = {



        init: function () {



          // MixItUp plugin

          $('#portfoliolist').mixitup({

            targetSelector: '.portfolio',

            filterSelector: '.filter',

            effects: ['fade'],

            easing: 'snap',

            // call the hover effect

            onMixEnd: filterList.hoverEffect()

          });



        },



        hoverEffect: function () {



          // Simple parallax effect

          $('#portfoliolist .portfolio').hover(

            function () {

              $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');

              $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');

            },

            function () {

              $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');

              $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');

            }

          );



        }



      };



      // Run the show!

      filterList.init();





    });
  }

  addItem() {
    this.dataList.push({data_cat:'card',img:'static/jsenadmin-ui/img/easing/portfolios/card/3.jpg',text_title:'Reality',text_category:'Business card'});
    this.init();
    $(function () {
      $('#portfoliolist').mixitup.filter('card')
    })
  }
  constructor() {

  }
}
