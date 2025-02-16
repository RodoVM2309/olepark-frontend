import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material.module';

@Component({
  selector: 'app-parking',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule
  ],
  templateUrl: './parking.component.html',
  styleUrl: './parking.component.scss'
})
export class ParkingComponent {

}
