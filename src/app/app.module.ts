import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { ArmoryComponent } from './armory/armory.component';
import { LinkComponent } from './link/link.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { BannerComponent } from './banner/banner.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FrameComponent } from './frame/frame.component';
import { DoorComponent } from './door/door.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ArmoryComponent,
    LinkComponent,
    BurgerMenuComponent,
    BannerComponent,
    GalleryComponent,
    FrameComponent,
    DoorComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
