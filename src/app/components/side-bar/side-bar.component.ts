import { Component, OnInit } from '@angular/core';
import { Menu } from './Menu';
import { TabsService } from 'src/app/service/tabs/tabs.service';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  menuList: Menu[] = MenuList
  constructor(private tabService: TabsService) { 
  }
  ngOnInit(): void {
  }
  clickMenu(menu: Menu): void {
    const tab = {path: menu.path, title: menu.title}
    if (this.tabService.getTabIndex(tab) === -1) {
      this.tabService.tabs.push(tab)
    }
    this.tabService.currentTab = tab
    this.tabService.setSelectedIndex()
  }
}
const MenuList = [
  {
    title: '产品手册',
    icon: 'unordered-list',
    path: 'productInfo',
    childMenu: [
      {
        title: '手册管理',
        icon: '',
        path: 'productInfo/manage',
        childMenu: []
      },
      {
        title: '手册详细',
        icon: '',
        path: 'productInfo/detail',
        childMenu: []
      },
      {
        title: '新增手册',
        icon: '', 
        path: 'productInfo/create',
        childMenu: []
      },
      {
        title: '编辑手册',
        icon: '',
        path: 'productInfo/edit',
        childMenu: []
      }
    ]
  },
  {
    title: '产品中心',
    icon: 'appstore',
    path: 'product',
    childMenu: [
      {
        title: '产品管理',
        icon: '',
        path: 'product/manage',
        childMenu: []
      },
      {
        title: '产品详细',
        icon: '',
        path: 'product/detail',
        childMenu: []
      },
      {
        title: '产品入库',
        icon: '',
        path: 'product/inOrder',
        childMenu: []
      },
      {
        title: '入库编辑',
        icon: '',
        path: 'product/inOrderEdit',
        childMenu: []
      }
    ]
  }
]