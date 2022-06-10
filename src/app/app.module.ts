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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
