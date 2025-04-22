import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

interface Student {
  id: number;
  name: string;
  present: boolean;
}

interface Class {
  id: number;
  name: string;
  students: Student[];
}

@Component({
  standalone: false,
  selector: 'app-absence-management',
  templateUrl: './absence-management.component.html',
  styleUrls: ['./absence-management.component.css'],
  providers: [DatePipe]
})
export class AbsenceManagementComponent implements OnInit {
  classes: Class[] = [];
  selectedClass: Class | null = null;
  absenceForm: FormGroup;
  searchTerm: string = '';
  searchControl: FormControl = new FormControl('');
  currentDate: string;
  isSidebarCollapsed = false;

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) {
    this.absenceForm = this.fb.group({
      students: this.fb.array([])
    });
    this.currentDate = this.datePipe.transform(new Date(), 'fullDate') || '';
  }
  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  ngOnInit(): void {
    this.initializeMockData();
    this.setupSearch();
  }

  // Initialize mock data for demonstration
  private initializeMockData(): void {
    const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'];
    
    this.classes = Array.from({ length: 5 }, (_, i) => {
      const studentCount = Math.floor(Math.random() * 10) + 20; // 20-30 students
      const students = Array.from({ length: studentCount }, (_, j) => ({
        id: j + 1,
        name: `Etudiant ${j + 1}`,
        present: true
      }));

      return {
        id: i + 1,
        name: `Classe ${i + 1} - ${subjects[i]}`,
        students
      };
    });
  }

  private setupSearch(): void {
    this.searchControl.valueChanges.subscribe(value => {
      this.searchTerm = value || '';
    });
  }

  // Form array accessor
  get studentsFormArray(): FormArray {
    return this.absenceForm.get('students') as FormArray;
  }

  // Safe FormControl accessor
  getStudentControl(index: number): FormControl {
    return this.studentsFormArray.at(index) as FormControl;
  }

  // Class selection handler
  selectClass(selectedClass: Class): void {
    this.selectedClass = selectedClass;
    this.rebuildStudentFormArray();
  }

  private rebuildStudentFormArray(): void {
    this.studentsFormArray.clear();
    if (!this.selectedClass) return;

    this.selectedClass.students.forEach(student => {
      this.studentsFormArray.push(this.fb.control(student.present));
    });
  }

  // Toggle all students' presence
  toggleAllPresent(): void {
    if (!this.selectedClass) return;
    
    const allPresent = this.studentsFormArray.controls.every(control => control.value);
    this.studentsFormArray.controls.forEach(control => {
      control.setValue(!allPresent);
    });
  }

  // Save absences to the selected class
  saveAbsences(): void {
    if (!this.selectedClass) return;
    
    this.selectedClass.students.forEach((student, index) => {
      student.present = this.getStudentControl(index).value;
    });

    console.log('Absences saved:', this.selectedClass);
    alert('Absences sauvgardées avec succès !');
  }

  // Filter classes based on search term
  get filteredClasses(): Class[] {
    return this.classes.filter(cls => 
      cls.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Filter students based on search term
  get filteredStudents(): Student[] {
    if (!this.selectedClass) return [];
    return this.selectedClass.students.filter(student => 
      student.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Safe class name accessor for template
  getSelectedClassName(): string {
    return this.selectedClass?.name || '';
  }
}