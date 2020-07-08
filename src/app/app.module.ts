import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialUiModule} from './core/shared-modules/material-ui/material-ui.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { EpisodesListComponent } from './components/episodes-list/episodes-list.component';
import { RegisterComponent } from './components/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { CharacterInfoComponent } from './components/characters-list/character-info/character-info.component';
import {LoadingSpinnerComponent} from './components/loading-spinner/loading-spinner.component';
import { EpisodeInfoComponent } from './components/episodes-list/episode-info/episode-info.component';
import { CharacterItemComponent } from './components/characters-list/character-item/character-item.component';
import { UsersListComponent } from './components/register/users-list/users-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CharactersListComponent,
    EpisodesListComponent,
    RegisterComponent,
    CharacterInfoComponent,
    LoadingSpinnerComponent,
    EpisodeInfoComponent,
    CharacterItemComponent,
    UsersListComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
