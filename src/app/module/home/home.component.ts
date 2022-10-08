import { Component, OnInit } from '@angular/core';
import { ButtonEntry } from './ButtonEntry';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  entryList: ButtonEntry[] = []
  ngOnInit(): void {
  }

}
