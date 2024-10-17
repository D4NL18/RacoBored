import { Component } from '@angular/core';
import { InputComponent } from '../../../../components/input/input.component';
import { ButtonComponent } from '../../../../components/button/button.component';

@Component({
  selector: 'app-registerinfo',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './registerinfo.component.html',
  styleUrl: './registerinfo.component.scss'
})
export class RegisterinfoComponent {

}
