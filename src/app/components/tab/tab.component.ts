import { Component, OnInit } from '@angular/core';
import { TabsService } from 'src/app/service/tabs/tabs.service';
import { Tab } from 'src/app/service/tabs/Tab';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  tabs: Tab[] = this.tabService.tabs
  selectedTab: number

  constructor(private tabService:TabsService, private router: Router,private activatedRoute:ActivatedRoute) { 
    this.selectedTab = this.tabService.selectedIndex
  }

  ngOnInit(): void {
  }
  changeSelected({ index }: { index: number }) {
    this.tabService.selectedIndex = index
  }

  closeTab({ index }: { index: number }): void {
    this.tabService.closeTab(index)
  }
  getSelectedIndex(): number {
    return this.tabService.selectedIndex
  }
  clickTab(tab: Tab): void {
    this.router.navigateByUrl(tab.path)
  }
  ngDoCheck() {
    this.selectedTab = this.tabService.selectedIndex
  }
  refresh() {
    console.log('-=-=-=-=',this.activatedRoute)
  }
}
