import {Component, Input, OnInit, Output} from '@angular/core';
import {Character} from '../../../core/abstract/interfaces/character';
import {CharacterInfoComponent} from '../character-info/character-info.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss']
})
export class CharacterItemComponent implements OnInit {

  @Input('character') character: Character;
  @Input('showImage') showImage: boolean;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  viewDetail(info: Character){
    this.dialog.open(CharacterInfoComponent, {
      width: '450px',
      data: info
    })
  }

}
