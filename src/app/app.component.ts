import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNavComponent } from './shared/components/header-nav/header-nav.component';
import { ParkingComponent } from "./shared/components/parking/parking.component";
import { FindParkingComponent } from './shared/components/find-parking/find-parking.component';
import { TestimonialsComponent } from './shared/components/testimonials/testimonials.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderNavComponent,
    ParkingComponent,
    FindParkingComponent,
    TestimonialsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'olepark';
}
