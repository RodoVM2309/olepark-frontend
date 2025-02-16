import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material.module';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule
  ],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss'
})
export class HeaderNavComponent {
  
}
