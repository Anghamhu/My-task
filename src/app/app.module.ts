import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderMainComponent } from './core/header-main/header-main.component';
import { HeaderSecondaryComponent } from './core/header-secondary/header-secondary.component';
import { HomeComponent } from './pages/home/home.component';
import { PlansComponent } from './pages/plans/plans.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeroSectionComponent } from './pages/home/hero-section/hero-section.component';
import { CardSectionComponent } from './pages/home/card-section/card-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    HeaderSecondaryComponent,
    HomeComponent,
    PlansComponent,
    LandingPageComponent,
    HeroSectionComponent,
    CardSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatChipsModule,
    MatInputModule,
    MatChipsModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatTabsModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
