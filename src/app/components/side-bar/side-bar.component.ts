import { Component, OnInit } from '@angular/core';
import { MenuList } from './Constant';
import { Menu } from './Menu';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  public menuList: Menu[] = MenuList
  constructor() { 
  }
  ngOnInit(): void {
  }

}
