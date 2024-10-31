import { Component } from '@angular/core';
import { InputComponent } from '../../../../components/input/input.component';
import { ButtonComponent } from '../../../../components/button/button.component';
import {MatIconModule} from '@angular/material/icon';
import { RegisterService } from '../../../../services/auth/register/register.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registerinfo',
  standalone: true,
  imports: [InputComponent, ButtonComponent, MatIconModule, ReactiveFormsModule],
  templateUrl: './registerinfo.component.html',
  styleUrl: './registerinfo.component.scss'
})
export class RegisterinfoComponent {

  registerForm!: FormGroup;

  constructor(private registerService: RegisterService, private router: Router) {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit() {
    console.log("entrou")
    this.registerService.register(this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password,).subscribe({
      next: () => {
        console.log("sucesso")
        this.router.navigate(['']);
      },
      error: (err) => {
        console.log("Erro: ", err)
      }
    })
  }

}
