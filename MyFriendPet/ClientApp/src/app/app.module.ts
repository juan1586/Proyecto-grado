import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { AdopionsComponent } from './components/adopions/adopions.component';
import { SocialServicesComponent } from './components/social-services/social-services.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { PetWalkerComponent } from './components/pet-walker/pet-walker.component';
import { NewsComponent } from './components/news/news.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    AdopionsComponent,
    SocialServicesComponent,
    FooterComponent,
    ContactComponent,
    PetWalkerComponent,
    NewsComponent,
    WelcomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
