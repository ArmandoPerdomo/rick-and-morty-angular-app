import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharactersListComponent} from './components/characters-list/characters-list.component';
import {EpisodesListComponent} from './components/episodes-list/episodes-list.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'characters-list',
    component: CharactersListComponent
  },
  {
    path: 'episodes-list',
    component: EpisodesListComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
