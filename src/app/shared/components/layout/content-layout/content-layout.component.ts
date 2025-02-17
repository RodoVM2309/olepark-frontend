import { Component } from '@angular/core';
import { HeaderNavComponent } from "../../header-nav/header-nav.component";
import { ParkingComponent } from "../../parking/parking.component";
import { FindParkingComponent } from "../../find-parking/find-parking.component";
import { TestimonialsComponent } from "../../testimonials/testimonials.component";
import { ContactComponent } from "../../contact/contact.component";
import { FaqComponent } from "../../faq/faq.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-content-layout',
  standalone: true,
  imports: [
    HeaderNavComponent,
    ParkingComponent,
    FindParkingComponent,
    TestimonialsComponent,
    ContactComponent,
    FaqComponent,
    FooterComponent
],
  templateUrl: './content-layout.component.html',
  styleUrl: './content-layout.component.scss'
})
export class ContentLayoutComponent {

}
