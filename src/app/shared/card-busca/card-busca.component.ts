import { Component, OnInit, Input } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { IPromocao } from 'src/app/core/types/types';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss'],
})
export class CardBuscaComponent implements OnInit {
  @Input() promocao!: IPromocao;

  constructor(private promocoesService: PromocaoService) {}

  ngOnInit(): void {
    // this.promocoesService.listarPromocoes().subscribe((item) => {
    //   this.promocoes = item;
    // });
  }
}
