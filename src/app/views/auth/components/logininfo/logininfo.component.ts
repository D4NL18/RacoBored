import { Component, Output, EventEmitter } from '@angular/core';
import { InputComponent } from '../../../../components/input/input.component';
import { ButtonComponent } from '../../../../components/button/button.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../../../services/auth/login/login.service'
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logininfo',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, MatIconModule],
  providers: [LoginService],
  templateUrl: './logininfo.component.html',
  styleUrl: './logininfo.component.scss'
})
export class LogininfoComponent {

  submit() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => {
        console.log("sucesso")
        this.router.navigate(['/addTask']);
      },
      error: (err) =>{
        console.log("Erro: ", err)
      }
    })
  }

  loginForm!: FormGroup;

  constructor(private loginService: LoginService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
}
