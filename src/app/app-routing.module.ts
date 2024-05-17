import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArmoryComponent } from './armory/armory.component';
import { LinkComponent } from './link/link.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { FrameComponent } from './frame/frame.component';
import { ContactComponent } from './contact/contact.component';
import { ValidateComponent } from './validate/validate.component';
import { ConverterComponent } from './converter/converter.component';
import { ClickComponent } from './click/click.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TargetComponent } from './target/target.component';
import { QuestionComponent } from './question/question.component';
import { TutoComponent } from './tuto/tuto.component';

const routes: Routes = [
 
  {
  path: '',
    component: AccueilComponent,
  },
{
  path: 'news',
    component: HomePageComponent
},

  { path: 'armory', component: ArmoryComponent },

  { path: 'link', component: LinkComponent },

  { path: 'burger', component: BurgerMenuComponent },


  { path: 'frame', component: FrameComponent },

  { path: 'tuto', component: TutoComponent },

  { path: 'contact', component: ContactComponent },

  { path: 'validate', component: ValidateComponent },

  { path: 'balistique', component: ConverterComponent },

  { path: 'click', component: ClickComponent },

  { path: 'target', component: TargetComponent },
  
  { path: 'question', component: QuestionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
