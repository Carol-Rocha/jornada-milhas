import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botao-controle',
  templateUrl: './botao-controle.component.html',
  styleUrls: ['./botao-controle.component.scss'],
})
export class BotaoControleComponent implements OnInit {
  @Input() operacao: 'incrementar' | 'decrementar' = 'incrementar';
  @Input() src = '';
  @Input() alt = '';

  constructor() {}

  ngOnInit(): void {}
}
