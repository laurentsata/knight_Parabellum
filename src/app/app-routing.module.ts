import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArmoryComponent } from './armory/armory.component';
import { LinkComponent } from './link/link.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FrameComponent } from './frame/frame.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ValidateComponent } from './validate/validate.component';
import { ConverterComponent } from './converter/converter.component';
import { ClickComponent } from './click/click.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },

  { path: 'armory', component: ArmoryComponent },

  { path: 'link', component: LinkComponent },

  { path: 'burger', component: BurgerMenuComponent },

  { path: 'gallery', component: GalleryComponent },

  { path: 'frame', component: FrameComponent },

  { path: 'footer', component: FooterComponent },

  { path: 'contact', component: ContactComponent },

  { path: 'validate', component: ValidateComponent },

  { path: 'converter', component: ConverterComponent },

  { path: 'click', component: ClickComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
