import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './_helpers/auth.service';
import { DomaineListeComponent } from './domaine/domaine-liste/domaine-liste.component';
import { DomaineAddComponent } from './domaine/domaine-add/domaine-add.component';
import { DomaineUpdateComponent } from './domaine/domaine-update/domaine-update.component';
import { DomaineDetailsComponent } from './domaine/domaine-details/domaine-details.component';

import { OrganismeUpdateComponent } from './organisme/organisme-update/organisme-update.component';
import { OrganismeListeComponent } from './organisme/organisme-liste/organisme-liste.component';
import { OrganismeAddComponent } from './organisme/organisme-add/organisme-add.component';
import { OrganismeDetailsComponent } from './organisme/organisme-details/organisme-details.component';

import { PaysListeComponent } from './pays/pays-liste/pays-liste.component';
import { PaysAddComponent } from './pays/pays-add/pays-add.component';
import { PaysUpdateComponent } from './pays/pays-update/pays-update.component';
import { PaysDetailsComponent } from './pays/pays-details/pays-details.component';

import { UserListeComponent } from './user/user-liste/user-liste.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';

import { ProfilDetailsComponent } from './profil/profil-details/profil-details.component';
import { ProfilListeComponent } from './profil/profil-liste/profil-liste.component';
import { ProfilUpdateComponent } from './profil/profil-update/profil-update.component';
import { ProfilAddComponent } from './profil/profil-add/profil-add.component';

import { FormateurListeComponent } from './formateur/formateur-liste/formateur-liste.component';
import { FormateurAddComponent } from './formateur/formateur-add/formateur-add.component';
import { FormateurUpdateComponent } from './formateur/formateur-update/formateur-update.component';
import { FormateurDetailsComponent } from './formateur/formateur-details/formateur-details.component';

import { FormationListeComponent } from './formation/formation-liste/formation-liste.component';
import { FormationAddComponent } from './formation/formation-add/formation-add.component';
import { FormationUpdateComponent } from './formation/formation-update/formation-update.component';
import { FormationDetailsComponent } from './formation/formation-details/formation-details.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    DomaineListeComponent,
    DomaineAddComponent,
    DomaineUpdateComponent,
    DomaineDetailsComponent,
    OrganismeUpdateComponent,
    OrganismeListeComponent,
    OrganismeAddComponent,
    OrganismeDetailsComponent,
    PaysListeComponent,
    PaysAddComponent,
    PaysUpdateComponent,
    PaysDetailsComponent,
    UserListeComponent,
    UserAddComponent,
    UserUpdateComponent,
    UserDetailsComponent,
    ProfilDetailsComponent,
    ProfilListeComponent,
    ProfilUpdateComponent,
    ProfilAddComponent,
    FormateurListeComponent,
    FormateurAddComponent,
    FormateurUpdateComponent,
    FormateurDetailsComponent,
    FormationListeComponent,
    FormationAddComponent,
    FormationUpdateComponent,
    FormationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
