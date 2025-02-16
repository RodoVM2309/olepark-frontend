import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
;
;

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule

  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Juan Pérez',
      image: 'assets/avatars/user-1.jpg',
      rating: 5,
      text: '“Desde que publiqué mi plaza de garaje, he pasado de alquilarla por meses a alquilarla por días. Y, la verdad, los ingresos aumentan cada mes”'
    },
    {
      name: 'Carlos Gómez ',
      image: 'assets/avatars/user-2.jpg',
      rating: 4,
      text: '“Desde que publiqué mi plaza de garaje, he pasado de alquilarla por meses a alquilarla por días. Y, la verdad, los ingresos aumentan cada mes”'
    },
    {
      name: 'María López',
      image: 'assets/avatars/user-3.jpg',
      rating: 5,
      text: '“Desde que publiqué mi plaza de garaje, he pasado de alquilarla por meses a alquilarla por días. Y, la verdad, los ingresos aumentan cada mes”'
    }
  ];
}
