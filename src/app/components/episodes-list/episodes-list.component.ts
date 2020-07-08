import { Component, OnInit } from '@angular/core';
import {RickAndMortyService} from '../../core/services/rick-and-morty.service';
import {Episode} from '../../core/abstract/interfaces/episode';
import {MatDialog} from '@angular/material/dialog';
import {EpisodeInfoComponent} from './episode-info/episode-info.component';
import {Info} from '../../core/abstract/interfaces/generic-response';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent implements OnInit {

  loading: boolean;
  episodes: Episode[] = [];
  info: Info;
  constructor(
    private rickAndMortyService: RickAndMortyService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllEpisodes('1');
  }

  getAllEpisodes(page: string){
    this.loading = true;
    this.rickAndMortyService.getAllEpisodes(page).subscribe(
      (resp) => {
        this.loading = false;
        this.episodes = resp.results;
        this.info = resp.info;
      }, (error) => {
        alert('An error has occurred');
      }
    )
  }

  viewDetail(episode: Episode) {
    this.dialog.open(EpisodeInfoComponent, {
      width: '600px',
      data: episode
    })
  }

  onPageChange($event: PageEvent) {
    this.getAllEpisodes(($event.pageIndex + 1).toString());
  }
}
