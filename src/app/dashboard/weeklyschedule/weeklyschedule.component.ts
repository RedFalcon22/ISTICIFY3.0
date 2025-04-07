import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Subject {
  name: string;
  color: string;
  txtcolor: string;
  day: string;
  time: string;
  classroom: string; // Added classroom field
}

@Component({
  selector: 'app-weeklyschedule',
  standalone: true,
  templateUrl: './weeklyschedule.component.html',
  styleUrls: ['./weeklyschedule.component.css'],
  imports: [CommonModule]
})
export class WeeklyscheduleComponent {
  timeSlots = ['8:30-10:00', '10:15-11:45', '13:00-14:30', '14:45-16:15'];
  days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  subjects: Subject[] = [
    { name: 'Sys.Expl', color: '#ffe7ba', txtcolor: '#d78d03', day: 'Lun', time: '8:30-10:00', classroom: 'A102' },
    { name: 'Sys.Expl', color: '#ffe7ba', txtcolor: '#d78d03', day: 'Lun', time: '10:15-11:45', classroom: 'A102' },
    { name: 'Sys.Expl', color: '#ffe7ba', txtcolor: '#d78d03', day: 'Lun', time: '13:00-14:30', classroom: 'A102' },
    { name: 'Security', color: '#e9efff', txtcolor: '#5272e9', day: 'Mar', time: '10:15-11:45', classroom: 'B103' },
    { name: 'AI', color: '#ffbabe', txtcolor: '#ff5078', day: 'Mer', time: '13:00-14:30', classroom: 'C104' },
    { name: 'Web.Dev', color: '#ffc9be', txtcolor: '#ff6500', day: 'Jeu', time: '14:45-16:15', classroom: 'D105' },
  ];

  getSubject(day: string, time: string): Subject | undefined {
    return this.subjects.find(subject => subject.day === day && subject.time === time);
  }
}
