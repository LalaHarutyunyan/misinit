import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';
import { TrainerComponent } from './trainer/trainer.component';

const routes: Routes = [
  
  {path:"home", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"contact-us", component: ContactUsComponent},
  {path:"gallery", component: GalleryComponent},
  {path:"services", component: ServicesComponent},
  {path:"trainer", component: TrainerComponent},
  {path:"news", component: NewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
