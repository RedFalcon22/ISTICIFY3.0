import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  display=0;
  constructor() { }

  ngOnInit() {
  }
   
}
