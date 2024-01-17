import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class FormBuscaService {
  formBusca: FormGroup;

  constructor(public dialog: MatDialog) {
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(null),
      destino: new FormControl(null),
      tipo: new FormControl('Executiva'),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
    });
  }

  getDescricaoPassageiros(): string {
    let descricao: string = '';

    const adultos = this.formBusca.get('adultos')?.value;
    const criancas = this.formBusca.get('criancas')?.value;
    const bebes = this.formBusca.get('bebes')?.value;
    if (adultos && adultos > 0) {
      descricao += `${adultos} adulto${adultos > 1 ? 's' : null}`;
    }
    if (criancas && criancas > 0) {
      descricao += `${descricao ? ',' : ''} criança${
        criancas > 1 ? 's' : null
      }`;
    }
    if (bebes && bebes > 0) {
      descricao += `${descricao ? ',' : ''} bebê${bebes > 1 ? 's' : null}`;
    }

    return descricao;
  }

  obterControle(nome: string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe`);
    }
    return control as FormControl;
  }

  alterarTipo(tipo: string) {
    this.formBusca.patchValue({
      tipo,
    });
    console.log('tipo:', tipo);
  }

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
