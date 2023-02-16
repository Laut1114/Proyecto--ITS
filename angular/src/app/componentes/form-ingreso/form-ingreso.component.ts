import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { Prere } from 'src/app/models/prere';
import { PreInscripcionService } from 'src/app/services/pre_inscripcion/pre-inscripcion.service';

@Component({
  selector: 'app-form-ingreso',
  templateUrl: './form-ingreso.component.html',
  styleUrls: ['./form-ingreso.component.css'],
  template: `<re-captcha (resolved)="resolved($event)" siteKey="6LdpX9QiAAAAAMSJVt-_XIQ2fmyVOIlGpfL10oap"></re-captcha>`
})
export class FormIngresoComponent implements OnInit {
  private file!: File
  public pathImagen: string = ""
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  formIngreso!: FormGroup;
  constructor(private fb: FormBuilder, private preService: PreInscripcionService) {

    this.formIngreso = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      numDoc: ['', Validators.required],
      domicilio: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      carrera: ['', Validators.required],
      nivelUser: ['', Validators.required],
      ciudad: ['', Validators.required],
      provincia: ['', Validators.required],
      fotoDNI: ['']
    })
  }

  ngOnInit(): void { }

  enviaringreso() {

    if (!this.formIngreso.invalid) {
      console.log(this.formIngreso.value);

      this.preService.enviarPre(this.formIngreso.value);

      alert("Datos Agregados");

      this.formIngreso.reset();

      fetch(`https://formsubmit.co/ajax/${this.formIngreso.value.email}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        nombre: this.formIngreso.value.nombre
        
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
    }
    else {
      alert("el fomulario es invalido")
      console.log(this.formIngreso.value)
    }


  }
  obtenerImagen(event: any) {
    this.file = event.target.files[0]
  }
}