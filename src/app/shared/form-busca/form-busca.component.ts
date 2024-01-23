import { Component, OnInit } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form/form-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss'],
})
export class FormBuscaComponent implements OnInit {
  constructor(public formBuscaService: FormBuscaService) {}

  ngOnInit(): void {}

  buscar() {
    console.log(this.formBuscaService.formBusca.value);
  }
}
