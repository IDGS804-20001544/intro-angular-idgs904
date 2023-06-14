import { Component } from '@angular/core';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {
alumnos:any[]=[
  {
    "matricula":1234,
    "nombre":"Axel",
    "edad":21,
    "correo":"axel@gmail.com",
    "pago":129.42,
    "foto":"https://pm1.aminoapps.com/7119/b0abdf491cffde4bdf95850956c1b15a5591a4b5r1-712-707v2_uhq.jpg"
  },
  {
    "matricula":1234,
    "nombre":"Ian",
    "edad":22,
    "correo":"Ianl@gmail.com",
    "pago":129.42,
    "foto":"https://i.blogs.es/43a9c3/uganda/1366_521.jpg"
  },
  {
    "matricula":1234,
    "nombre":"Armando",
    "edad":21,
    "correo":"armando@gmail.com",
    "pago":129.42,
    "foto":"data:image/jpeg;base64,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"
  }
]
}
