import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() placeholder: string = ""
  @Input() id: string = ""
  @Input() label: string = ""
  @Input() type: "text" | "password" | "email" = "text"
  
}
