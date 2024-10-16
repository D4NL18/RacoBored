import { Component } from '@angular/core';
import { InputComponent } from '../../../../components/input/input.component';
import { ButtonComponent } from '../../../../components/button/button.component';

@Component({
  selector: 'app-logininfo',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './logininfo.component.html',
  styleUrl: './logininfo.component.scss'
})
export class LogininfoComponent {

}
