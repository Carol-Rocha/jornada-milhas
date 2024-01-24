import { Component, OnInit } from '@angular/core';
import { DepoimentoService } from 'src/app/core/services/depoimentos/depoimento.service';
import { IDepoimento } from 'src/app/core/types/types';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss'],
})
export class DepoimentosComponent implements OnInit {
  depoimentos!: IDepoimento[];

  constructor(private depoimentoService: DepoimentoService) {}

  ngOnInit(): void {
    this.depoimentoService
      .listarDepoimentos()
      .subscribe((item) => (this.depoimentos = item));
  }
}
