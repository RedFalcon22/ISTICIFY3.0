import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classdetails',
  imports: [CommonModule],
  templateUrl: './classdetails.component.html',
  styleUrl: './classdetails.component.css'
})

export class ClassdetailsComponent {
  cards = [
    { title: 'Cours', number: 3 },
    { title: 'Classes', number: 7 },
    { title: 'Élèves', number: 112 }
  ];
}

