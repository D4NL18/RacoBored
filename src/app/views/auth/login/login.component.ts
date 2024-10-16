import { Component } from '@angular/core';
import { AuthcardComponent } from '../components/authcard/authcard.component';
import { LogininfoComponent } from '../components/logininfo/logininfo.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthcardComponent, LogininfoComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
