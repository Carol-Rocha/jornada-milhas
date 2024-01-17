import { FormBuscaService } from 'src/app/core/services/form/form-busca.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(public formBuscaService: FormBuscaService) {}

  ngOnInit(): void {}
}
