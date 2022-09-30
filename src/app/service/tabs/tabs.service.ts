import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  tabs: any[] = []
  currentTab: any
  constructor() { }
}
