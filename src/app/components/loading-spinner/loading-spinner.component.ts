import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {
	@Input('diameter') diameter = 40;
	@Input('label') label = 'Cargando datos...';

  constructor() { }

  ngOnInit() {
  }

}
