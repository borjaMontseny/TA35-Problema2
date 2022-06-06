import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Problema 2';

  formularioContacto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mensaje: new FormControl('', Validators.required),
    respuesta: new FormControl('', Validators.required),
  })

  randomNum() {
    let numero = Math.floor(Math.random() * 6);
    return numero;
  }

  valorA = this.randomNum();
  valorB = this.randomNum();

  get nombre(){return this.formularioContacto.get('nombre')}
  get email(){return this.formularioContacto.get('email')}
  get mensaje(){return this.formularioContacto.get('mensaje')}
  get respuesta(){return this.formularioContacto.get('mensaje')}

}
