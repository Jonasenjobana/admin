import { Injectable } from '@angular/core';
import { Tab } from './Tab';

const home: Tab = {
  path: 'home',
  title: '首页'
}

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  tabs: Tab[] 
  currentTab: Tab
  selectedIndex:number
  constructor() {
    this.tabs = [home]
    this.currentTab = home
    this.selectedIndex = 0
  }
  closeTab(index: number):void {
    this.tabs.splice(index, 1)
  }
  getTabIndex(tab: Tab):number {
    return this.tabs.findIndex(item => item.path === tab.path)
  }
  setSelectedIndex(): number {
    this.selectedIndex = this.tabs.findIndex(item => item.path === this.currentTab.path)
    return this.selectedIndex
  }
}
