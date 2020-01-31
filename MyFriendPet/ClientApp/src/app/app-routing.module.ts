import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdopionsComponent } from './components/adopions/adopions.component';
import { SocialServicesComponent } from './components/social-services/social-services.component';
import { AuthGuard } from './services/guards/auth.guard';
import { ContactComponent } from './components/contact/contact.component';
import { PetWalkerComponent } from './components/pet-walker/pet-walker.component';
import { NewsComponent } from './components/news/news.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'adoption', component: AdopionsComponent, canActivate: [AuthGuard] },
  { path: 'services', component: SocialServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'pet-walker', component: PetWalkerComponent },
  { path: 'news', component: NewsComponent },
  { path: '**', redirectTo: 'about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
