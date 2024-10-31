import { Component } from '@angular/core';
import { InputComponent } from '../../../../components/input/input.component';
import { ButtonComponent } from '../../../../components/button/button.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-registerinfo',
  standalone: true,
  imports: [InputComponent, ButtonComponent, MatIconModule],
  templateUrl: './registerinfo.component.html',
  styleUrl: './registerinfo.component.scss'
})
export class RegisterinfoComponent {

}
