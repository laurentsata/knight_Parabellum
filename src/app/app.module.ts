import { NgModule, isDevMode } from '@angular/core';
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
import { ContactComponent } from './contact/contact.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ValidateComponent } from './validate/validate.component';
import { ConverterComponent } from './converter/converter.component';
import { ClickComponent } from './click/click.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TargetComponent } from './target/target.component';
import { AngleComponent } from './angle/angle.component';
import { ModalComponent } from './modal/modal.component';
import { QuestionComponent } from './question/question.component';
import { TutoComponent } from './tuto/tuto.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { SearchService } from './search.service';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ArmoryComponent,
    LinkComponent,
    BurgerMenuComponent,
    BannerComponent,
    ContactComponent,
    ValidateComponent,
    ConverterComponent,
    ClickComponent,
    AccueilComponent,
    TargetComponent,
    AngleComponent,
    ModalComponent,
    QuestionComponent,
    TutoComponent,


  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatDialogModule,

        BrowserAnimationsModule,
        MatToolbarModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: !isDevMode(),
          // Register the ServiceWorker as soon as the application is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        })
    ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
