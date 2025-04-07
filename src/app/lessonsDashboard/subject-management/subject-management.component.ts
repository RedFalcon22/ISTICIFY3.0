import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-subject-management',
  templateUrl: './subject-management.component.html',
  imports:[NgStyle, CommonModule],
  styleUrls: ['./subject-management.component.css'],
})
export class SubjectManagementComponent implements OnInit {
  @Input() subjectTitle!: string; // Input property for subject title

  subjectId!: string; // Subject ID (name)
  subjectDetails: any; // Object to store subject details

  // Hardcoded subject data
  subjects = [
    { name: 'Sys_Expl', description: 'System Exploration lessons', color: '#ffe7ba' },
    { name: 'Security', description: 'Cybersecurity lessons', color: '#e9efff' },
    { name: 'AI', description: 'Artificial Intelligence lessons', color: '#ffbabe' },
    { name: 'Web_Dev', description: 'Web Development lessons', color: '#ffc9be' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the subject ID from the URL (the `id` parameter)
    this.subjectId = this.route.snapshot.paramMap.get('id')!;

    // Find the corresponding subject based on the ID
    this.subjectDetails = this.subjects.find(
      (subject) => subject.name.toLowerCase() === this.subjectId.toLowerCase()
    );

    if (!this.subjectDetails) {
      console.error('Subject not found!');
    }
  }
}
