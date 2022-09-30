import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import ngZorroModuleList from './config/ngZorroModule';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeadBarComponent } from './components/head-bar/head-bar.component';
import { TabComponent } from './components/tab/tab.component';
import { HomeComponent } from './views/home/home.component';


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeadBarComponent,
    TabComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...ngZorroModuleList
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
