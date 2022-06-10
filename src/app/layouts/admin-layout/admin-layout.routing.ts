import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { UtilisateurComponent } from 'app/utilisateur/utilisateur.component';
import { CompteComponent } from 'app/compte/compte.component';
import { ClientComponent } from 'app/client/client.component';
import { CompteresponsableComponent } from 'app/compteresponsable/compteresponsable.component';
import { ComptechauffeurComponent } from 'app/comptechauffeur/comptechauffeur.component';
import { CompteadministrateurComponent } from 'app/compteadministrateur/compteadministrateur.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'accueil',        component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'utilisateur',    component: UtilisateurComponent},
    { path:'compte',    component: CompteComponent},
    { path:'client', component:ClientComponent},
    { path:'compteresponsable',    component: CompteresponsableComponent},
    { path:'comptechauffeur',    component: ComptechauffeurComponent},
    { path:'compteadministrateur',    component: CompteadministrateurComponent},
];
