import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Character} from '../abstract/interfaces/character';
import {GenericResponse} from '../abstract/interfaces/generic-response';
import {Episode} from '../abstract/interfaces/episode';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCharacters(page: string){
    const params = new HttpParams()
      .set('page', page);
    return this.http.get<GenericResponse<Character>>(`${environment.baseUrl}/character`, {params});
  }

  getCharacter(url: string){
    return this.http.get<Character>(url);
  }

  getAllEpisodes(page: string){
    const params = new HttpParams()
      .set('page', page);
    return this.http.get<GenericResponse<Episode>>(`${environment.baseUrl}/episode`, {params});
  }
}
