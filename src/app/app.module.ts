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
import { SortparamsDirective } from './sortparams.directive';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';

import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
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
    SortparamsDirective,
    SortPipe,
    FilterPipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
