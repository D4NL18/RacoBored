import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-reroll',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './reroll.component.html',
  styleUrl: './reroll.component.scss'
})
export class RerollComponent {

  @Output() onClick = new EventEmitter<void>();

  reroll() {
    this.onClick.emit()
  }
}
