import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { CenterComponent } from './center/center.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      LeftSideBarComponent,
      CenterComponent,
      FooterComponent,
      ProductsComponent,
      ContactComponent,
      DetailsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
      
   ]
})
export class AppModule { }
