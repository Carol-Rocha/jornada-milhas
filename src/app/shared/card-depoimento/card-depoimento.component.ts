import { Component, Input, OnInit } from '@angular/core';
import { IDepoimento } from 'src/app/core/types/types';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.scss'],
})
export class CardDepoimentoComponent implements OnInit {
  @Input() depoimentos!: IDepoimento;

  constructor() {}

  ngOnInit(): void {}
}
