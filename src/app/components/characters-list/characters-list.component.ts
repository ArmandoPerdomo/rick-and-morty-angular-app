import {Component, OnInit} from '@angular/core';
import {RickAndMortyService} from '../../core/services/rick-and-morty.service';
import {Character} from '../../core/abstract/interfaces/character';
import {Info} from '../../core/abstract/interfaces/generic-response';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  info: Info;
  characters: Character[] = [];

  loading: boolean;
  constructor(
    private rickAndMortyService: RickAndMortyService
  ) { }

  ngOnInit(): void {
    this.getAllCharacters('1');
  }

  getAllCharacters(page: string){
    this.loading = true;
    this.rickAndMortyService.getAllCharacters(page).subscribe(
      (resp) => {
        this.loading = false;
        this.characters = resp.results;
        this.info = resp.info;
      }, (error) => {
        alert('An error has occurred');
      }
    )
  }

  onPageChange($event: PageEvent) {
    this.getAllCharacters(($event.pageIndex + 1).toString());
  }
}
