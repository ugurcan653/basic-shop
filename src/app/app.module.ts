import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';


import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { CenterComponent } from './center/center.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { CartService } from './services/cart.service';
import { WishService } from './services/wish.service';
import { LocalStorageService } from './services/local-storage.service';
import { CartComponent } from './cart/cart.component';



@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      LeftSideBarComponent,
      CenterComponent,
      FooterComponent,
      ProductsComponent,
      ContactComponent,
      DetailsComponent,
      CartComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      SimpleNotificationsModule.forRoot({
         timeOut: 3000,
         position: ["top", "right"],
         lastOnBottom: true
      }),
      BrowserAnimationsModule
   ],
   providers: [
      CartService,
      WishService,
      NotificationsService,
      LocalStorageService

   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
