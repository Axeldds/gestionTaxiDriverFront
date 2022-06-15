import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CompteComponent } from './compte/compte.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ClientComponent } from './client/client.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { AvisComponent } from './avis/avis.component';
import { CompteresponsableComponent } from './compteresponsable/compteresponsable.component';
import { CompteadministrateurComponent } from './compteadministrateur/compteadministrateur.component';
import { ComptechauffeurComponent } from './comptechauffeur/comptechauffeur.component';
import { TaxiComponent } from './taxi/taxi.component';

import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { AgenceComponent } from './agence/agence.component';
import { LoginComponent } from './login/login.component';
import { PlanningComponent } from './planning/planning.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
]);


@NgModule({
  imports: [
    FullCalendarModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCN913MNvahA0-e53Jr9o4fg9VqdFuyTwo'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CompteComponent,
    CompteresponsableComponent,
    UtilisateurComponent,
    ClientComponent,
    ReclamationComponent,
    AvisComponent,
    ComptechauffeurComponent,
    CompteadministrateurComponent,
    TaxiComponent,
    AgenceComponent,
    LoginComponent,
    PlanningComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
