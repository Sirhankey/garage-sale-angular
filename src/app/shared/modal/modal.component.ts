import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  cont_adultos = 0;
  cont_criancas = 0;
  cont_bebes = 0;

  constructor() { }

  addAdulto() {
    this.cont_adultos++;
  }

  removeAdulto() {
    if (this.cont_adultos > 0) {
      this.cont_adultos--;
    }
  }

  addCrianca() {
    this.cont_criancas++;
  }

  removeCrianca() {
    if (this.cont_criancas > 0) {
      this.cont_criancas--;
    }
  }

  addBebe() {
    this.cont_bebes++;
  }

  removeBebe() {
    if (this.cont_bebes > 0) {
      this.cont_bebes--;
    }
  }

  getAdultos() {
    return this.cont_adultos;
  }

  getCriancas() {
    return this.cont_criancas;
  }

  getBebes() {
    return this.cont_bebes;
  }

  getPassageiros() {
    return this.cont_adultos + this.cont_criancas + this.cont_bebes;
  }
}
