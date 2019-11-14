import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderModule } from './header-component/header.module';
import { AsideBarModule } from './aside-bar/aside-bar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LyThemeModule, LY_THEME } from '@alyle/ui';
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';

import { LyGridModule } from '@alyle/ui/grid';

import {HttpClientModule} from '@angular/common/http'
//test使用
import { TestComponentModule } from './test-component/test-component.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    AsideBarModule,
    BrowserAnimationsModule,
    LyThemeModule.setTheme('minima-light'),
    LyGridModule,
    HttpClientModule,

    //test使用
    TestComponentModule
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: LY_THEME, useClass: MinimaLight, multi: true }]
})
export class AppModule { }

