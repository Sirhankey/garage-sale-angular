import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss']
})
export class CardBuscaComponent {
  constructor() { }

  @Input()
  title?: string;

  @Input()
  subtitle?: string;

  @Input()
  image?: string;

  @Input()
  content?: string;

  @Input()
  valor?: number;

}
