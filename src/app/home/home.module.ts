import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HomeComponent } from './home.component';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCN913MNvahA0-e53Jr9o4fg9VqdFuyTwo'
    })
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
