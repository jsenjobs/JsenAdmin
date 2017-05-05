import {MenuItem} from "../module/ui/menu.item";
/**
 * Created by jsen on 2017/4/9.
 */

var LeftMenu:MenuItem[] = [
  {_id: 10, css:'fa-circle-o', type:'h', name: 'MAIN NAVIGATION', href:'/dashboard', children:[]},
  {_id: 11, css:'fa-dashboard', type:'ll0', name: 'Dashboard', href:'/dashboard', children: [
    {_id: 12, css:'fa-circle-o', type:'ll1', name: 'Dashboard v1', href:'/dashboard', children:[]},
    {_id: 13, css:'fa-circle-o', type:'ll1', name: 'Dashboard v2', href:'/dashboard', children:[]}
  ]},
  {_id: 14, css:'fa-circle-o', type:'ll0', name: 'Layout Options', href:'/dashboard', children: [
    {_id: 15, css:'fa-circle-o', type:'level1', name: 'Top Navigation', href:'/dashboard', children:[]},
    {_id: 16, css:'fa-circle-o', type:'level1', name: 'Boxed', href:'/dashboard', children:[]},
    {_id: 17, css:'fa-circle-o', type:'level1', name: 'Fixed', href:'/dashboard', children:[]},
    {_id: 18, css:'fa-circle-o', type:'level1', name: 'Collapsed Sidebar', href:'/dashboard', children:[]}
  ]},
  {_id: 19, css:'fa-circle-o', type:'ll0', name: 'Widgets', href:'/dashboard', children: []},
  {_id: 20, css:'fa-circle-o', type:'ll0', name: 'Charts', href:'/dashboard', children: [
    {_id: 21, css:'fa-circle-o', type:'ll1', name: 'ChartJS', href:'/dashboard', children:[]},
    {_id: 22, css:'fa-circle-o', type:'ll1', name: 'Morris', href:'/dashboard', children:[]},
    {_id: 23, css:'fa-circle-o', type:'ll1', name: 'Flot', href:'/dashboard', children:[]},
    {_id: 24, css:'fa-circle-o', type:'ll1', name: 'Inline charts', href:'/dashboard', children:[]}
  ]},
  {_id: 25, css:'fa-circle-o', type:'ll0', name: 'UI Elements', href:'/dashboard', children: [
    {_id: 26, css:'fa-circle-o', type:'ll1', name: 'General', href:'/dashboard', children:[]},
    {_id: 27, css:'fa-circle-o', type:'ll1', name: 'Icons', href:'/dashboard', children:[]},
    {_id: 28, css:'fa-circle-o', type:'ll1', name: 'Buttons', href:'/dashboard', children:[]},
    {_id: 29, css:'fa-circle-o', type:'ll1', name: 'Sliders', href:'/dashboard', children:[]},
    {_id: 30, css:'fa-circle-o', type:'ll1', name: 'Timeline', href:'/dashboard', children:[]},
    {_id: 31, css:'fa-circle-o', type:'ll1', name: 'Modals', href:'/dashboard', children:[]}
  ]},
  {_id: 32, css:'fa-circle-o', type:'ll0', name: 'Forms', href:'/dashboard', children: [
    {_id: 33, css:'fa-circle-o', type:'ll1', name: 'General Elements', href:'/dashboard', children:[]},
    {_id: 34, css:'fa-circle-o', type:'ll1', name: 'Anvanced Elements', href:'/dashboard', children:[]},
    {_id: 35, css:'fa-circle-o', type:'ll1', name: 'Editors', href:'/dashboard', children:[]}
  ]},
  {_id: 36, css:'fa-circle-o', type:'ll0', name: 'Tables', href:'/dashboard', children: [
    {_id: 37, css:'fa-circle-o', type:'ll1', name: 'Simple tables', href:'/dashboard', children:[]},
    {_id: 38, css:'fa-circle-o', type:'ll1', name: 'Data tables', href:'/dashboard', children:[]}
  ]},
  {_id: 39, css:'fa-circle-o', type:'ll0', name: 'Calendar', href:'/dashboard', children: []},
  {_id: 40, css:'fa-circle-o', type:'ll0', name: 'Mailbox', href:'/dashboard', children: []},
  {_id: 41, css:'fa-circle-o', type:'ll0', name: 'Examples', href:'/dashboard', children: [
    {_id: 42, css:'fa-circle-o', type:'ll1', name: 'Invoice', href:'/dashboard', children:[]},
    {_id: 43, css:'fa-circle-o', type:'ll1', name: 'Profile', href:'/dashboard', children:[]},
    {_id: 44, css:'fa-circle-o', type:'ll1', name: 'Login', href:'/dashboard', children:[]},
    {_id: 45, css:'fa-circle-o', type:'ll1', name: 'Register', href:'/dashboard', children:[]},
    {_id: 46, css:'fa-circle-o', type:'ll1', name: 'Lockscreen', href:'/dashboard', children:[]},
    {_id: 47, css:'fa-circle-o', type:'ll1', name: '404 Error', href:'/dashboard', children:[]},
    {_id: 48, css:'fa-circle-o', type:'ll1', name: '500 Error', href:'/dashboard', children:[]},
    {_id: 49, css:'fa-circle-o', type:'ll1', name: 'Blank Page', href:'/dashboard', children:[]},
    {_id: 50, css:'fa-circle-o', type:'ll1', name: 'Pace Page', href:'/dashboard', children:[]}
  ]},
  {_id: 51, css:'fa-circle-o', type:'ll0', name: 'Multilevel', href:'/dashboard', children: [
    {_id: 52, css:'fa-circle-o', type:'ll1', name: 'Level One', href:'/dashboard', children:[]},
    {_id: 53, css:'fa-circle-o', type:'ll1', name: 'Level One', href:'/dashboard', children:[
      {_id: 54, css:'fa-circle-o', type:'ll2', name: 'Level Two', href:'/dashboard', children:[]},
      {_id: 55, css:'fa-circle-o', type:'ll2', name: 'Level Two', href:'/dashboard', children:[
        {_id: 56, css:'fa-circle-o', type:'ll3', name: 'Level Three', href:'/dashboard', children:[]},
        {_id: 57, css:'fa-circle-o', type:'ll3', name: 'Level Three', href:'/dashboard', children:[]}
      ]}
    ]},
    {_id: 58, css:'fa-circle-o', type:'ll1', name: 'Level One', href:'/dashboard', children:[]}
  ]},
  {_id: 59, css:'fa-circle-o', type:'ll0', name: 'Documentation', href:'/dashboard', children: []},
  {_id: 60, css:'fa-circle-o', type:'h', name: 'LABELS', href:'/dashboard', children: []},
  {_id: 61, css:'fa-circle-o', type:'ll0', name: 'Important', href:'/dashboard', children:[]},
  {_id: 62, css:'fa-circle-o', type:'ll0', name: 'Warning', href:'/dashboard', children:[]},
  {_id: 63, css:'fa-circle-o', type:'ll0', name: 'Information', href:'/dashboard', children:[]}
];

export var MenuMock = {
  LeftMenu:LeftMenu
};
