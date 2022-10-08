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
import { ProductInfoComponent } from './module/product-info/product-info.component';

registerLocaleData(zh);

import { ProductModule } from './module/product/product.module'
import { ProductInfoModule } from './module/product-info/product-info.module'
import { HomeModule } from './module/home/home.module';
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeadBarComponent,
    TabComponent,
    ProductInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomeModule,
    ProductInfoModule,
    ProductModule,
    ...ngZorroModuleList
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
