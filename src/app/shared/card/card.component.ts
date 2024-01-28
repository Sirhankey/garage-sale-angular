import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  variant?: 'primary' | 'secondary' = 'primary';

  @Input()
  alert?: 'success' | 'danger' | 'warning' | 'info' = 'success';

  @Input()
  colorMode?: 'dark' | 'light' = 'light';

  constructor() { }

}
