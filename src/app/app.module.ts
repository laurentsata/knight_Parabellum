import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import { ContactComponent } from './contact/contact.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ValidateComponent } from './validate/validate.component';
import { ConverterComponent } from './converter/converter.component';



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
    ContactComponent,
    ValidateComponent,
    ConverterComponent,


  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatDialogModule,

        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
