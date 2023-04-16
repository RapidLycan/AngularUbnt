import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './Components/landing/landing.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
