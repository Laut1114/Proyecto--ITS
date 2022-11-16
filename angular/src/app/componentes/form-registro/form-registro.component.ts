import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {

  formRegister!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { 
    this.formRegister = this.fb.group({
      username: ['', Validators.maxLength(16)],
      nombre_user: ['', Validators.required],
      apellido_user: ['', Validators.required],
      email_user: ['', Validators.email],
      password_user: ['', Validators.minLength(8)],
      // user_permissions: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  registrarse(user: UserInterface) {
    this.authService.register(user).then(() => {
      this.router.navigate(['/login']);
    });
  }

}
