import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-history-card',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.scss'
})
export class HistoryCardComponent {
  @Input() name: string = ""
  @Input() text: string = ""
  isOpen: boolean = false

  handleClick() {
    if(this.isOpen) this.isOpen = false;
    else this.isOpen = true
  }
}
