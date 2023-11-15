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

const routes: Routes = [{
  path: '' ,
  component: HomePageComponent
},

{path: 'armory' ,
component: ArmoryComponent
},

{path: 'link' ,
component: LinkComponent
},

{path: 'burger' ,
component: BurgerMenuComponent
},

{path: 'gallery' ,
component: GalleryComponent
},

{path: 'frame' ,
component: FrameComponent
},

{path: 'footer' ,
component: FooterComponent
},

{path: 'contact' ,
component: ContactComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
