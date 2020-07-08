import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Episode} from '../../../core/abstract/interfaces/episode';
import {RickAndMortyService} from '../../../core/services/rick-and-morty.service';
import {forkJoin} from 'rxjs';
import {Character} from '../../../core/abstract/interfaces/character';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-episode-info',
  templateUrl: './episode-info.component.html',
  styleUrls: ['./episode-info.component.scss']
})
export class EpisodeInfoComponent implements OnInit, OnDestroy {

  loadingCharacters: boolean;
  characters: Character[] = [];

  alive: boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA) public episode: Episode,
    private rickAndMortyService: RickAndMortyService
  ) { }

  ngOnInit(): void {
    this.alive = true;
    this.loadingCharacters = true;
    const characterCalls = this.episode.characters.map(e => this.rickAndMortyService.getCharacter(e));
    const forked = forkJoin(characterCalls);
    forked.pipe(takeWhile(() => this.alive)).subscribe(
      (characters) => {
        this.loadingCharacters = false;
        this.characters = characters;
      }
    );
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
