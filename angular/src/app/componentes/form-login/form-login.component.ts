import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  formLogin!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { 
    this.formLogin = this.fb.group({
      email_user: ['', Validators.email],
      password_user: ['', Validators.minLength(8)]
    })
  }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
    this.authService.login(email, password).then((credenciales) => {
      if(!credenciales) {
        // AGREGAR 
        alert('datos incorrectos');
        return false;
      }
      
      return this.router.navigate(['/']);
    });
  }
}
