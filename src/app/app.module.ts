import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent }  from './welcomescreen.component';
import { NavbarComponent }   from './navbar.component';
import { FooterComponent }   from './footer.component';

import { CarouselModule } from 'ngx-bootstrap';
import { InfoComponent }   from './info.component';
import { MenuComponent }   from './menu.component';
import { AboutComponent }   from './about.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    NavbarComponent,
    FooterComponent,
    InfoComponent,
    AboutComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: 'home',component: WelcomeScreenComponent},
      {path: 'menu',component: MenuComponent},
      {path: 'info',component: InfoComponent},
      {path: 'about',component: AboutComponent},       
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [],

  bootstrap: [AppComponent, NavbarComponent, FooterComponent]
})
export class AppModule { }
