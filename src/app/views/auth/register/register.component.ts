import { Component } from '@angular/core';
import { AuthcardComponent } from '../components/authcard/authcard.component';
import { RegisterinfoComponent } from '../components/registerinfo/registerinfo.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AuthcardComponent, RegisterinfoComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
