import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { CenterComponent } from './center/center.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      LeftSideBarComponent,
      CenterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent,
      NavbarComponent,
      LeftSideBarComponent
   ]
})
export class AppModule { }
