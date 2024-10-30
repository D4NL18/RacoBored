import { Component, Output, EventEmitter } from '@angular/core';
import { InputComponent } from '../../../../components/input/input.component';
import { ButtonComponent } from '../../../../components/button/button.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../../../services/login.service';

@Component({
  selector: 'app-logininfo',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule],
  providers: [LoginService],
  templateUrl: './logininfo.component.html',
  styleUrl: './logininfo.component.scss'
})
export class LogininfoComponent {

  submit() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => {
        console.log("sucesso")
      },
      error: (err) =>{
        console.log("Erro: ", err)
      }
    })
  }

  loginForm!: FormGroup;

  constructor(private loginService: LoginService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
}
