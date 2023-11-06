import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArmoryComponent } from './armory/armory.component';
import { LinkComponent } from './link/link.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { GalleryComponent } from './gallery/gallery.component';

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
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
