import { Component, Output, EventEmitter } from '@angular/core';
import { InputComponent } from '../../../../components/input/input.component';
import { ButtonComponent } from '../../../../components/button/button.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../../../services/auth/login/login.service'
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-logininfo',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, MatIconModule, MatSnackBarModule],
  providers: [LoginService],
  templateUrl: './logininfo.component.html',
  styleUrl: './logininfo.component.scss'
})
export class LogininfoComponent {

  constructor(private loginService: LoginService, private router: Router,  private snackBar: MatSnackBar) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  loginForm!: FormGroup;

  submit() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => {
        console.log("sucesso")
        this.router.navigate(['/addTask']);
      },
      error: (err) => {
        console.log("Erro: ", err);
        this.snackBar.open("Erro ao fazer login. Verifique suas credenciais e tente novamente.", "Fechar", {
          duration: 3000,  // Duração em milissegundos
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    });
  }
}