import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Character} from '../../../core/abstract/interfaces/character';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public character: Character
  ) { }

  ngOnInit(): void {
  }

}
