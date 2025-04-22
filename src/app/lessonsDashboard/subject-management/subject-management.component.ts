import { Component, OnInit, Input, OnDestroy, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { Subscription } from 'rxjs';
import { LessonService } from '../../services/lesson.service';
import { SidebarComponent } from '../../dashboard/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { MessagerieComponent } from '../../messagerie/messagerie.component';


@Component({
  selector: 'app-subject-management',
  templateUrl: './subject-management.component.html',
  imports:[ CommonModule, SidebarComponent, FormsModule, MessagerieComponent],
  standalone: true,
  styleUrls: ['./subject-management.component.css'],
})
export class SubjectManagementComponent implements OnInit, OnDestroy {
  subjectId!: string;
  lessons: any[] = [];
  
  showForm = false;
  isEditing = false;
  filterKeyword = '';
  filterKeywordLessonType = '';

  lessonTypes: string[] = ['Cours', 'TD', 'TP', 'DS', 'Examen']; // Lesson types
  formModel = {
    id: 0,
    title: '',
    uploadDate: '',  // Only a single date field
    filesStr: '',
    lessonType: '',
  };

  selectedFileNames: string[] = [];
  isSidebarCollapsed = false;
  private routeSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private lessonService: LessonService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe((params) => {
      this.subjectId = params.get('id')!;
      this.loadLessons();
    });
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  private loadLessons(): void {
    this.lessons = this.lessonService.getLessonsForSubject(this.subjectId);
    if (this.lessons.length === 0) {
      console.warn(`No lessons found for subject: ${this.subjectId}`);
    }
  }

  filteredLessons() {
    return this.lessons.filter(
      (l) =>
        l.title.toLowerCase().includes(this.filterKeyword.toLowerCase()) &&
        (this.filterKeywordLessonType === '' ||
          l.lessonType === this.filterKeywordLessonType) // Filter by lesson type
    );
  }

  resetFilter() {
    this.filterKeyword = '';
    this.filterKeywordLessonType = ''; // Reset lesson type filter
  }

  showAddForm() {
    this.isEditing = false;
    this.showForm = true;

    const currentDate = new Date().toISOString().slice(0, 16); // Get current date and time in ISO format

    this.formModel = {
      id: 0,
      title: '',
      uploadDate: currentDate,  // Set current date
      filesStr: '',
      lessonType: '',
    };
  }

  editLesson(lesson: any) {
    this.isEditing = true;
    this.showForm = true;
    this.formModel = {
      id: lesson.id,
      title: lesson.title,
      uploadDate: this.formatDateTimeLocal(lesson.date),
      filesStr: lesson.files.join(', '),
      lessonType: lesson.lessonType, // Set the lesson type for editing
    };
  }

  cancelEdit() {
    this.showForm = false;
    this.isEditing = false;
    this.formModel = {
      id: 0,
      title: '',
      uploadDate: '',
      filesStr: '',
      lessonType: '',
    };
  }

  onSubmit() {
    const newLesson = {
      id: this.isEditing ? this.formModel.id : this.generateId(),
      title: this.formModel.title.trim(),
      date: new Date(this.formModel.uploadDate), // Use the single date field
      files: this.selectedFileNames,
      lessonType: this.formModel.lessonType,
    };

    if (this.isEditing) {
      const index = this.lessons.findIndex((l) => l.id === this.formModel.id);
      if (index !== -1) this.lessons[index] = newLesson;
    } else {
      this.lessons.push(newLesson);
    }

    this.cancelEdit();
  }

  deleteLesson(id: number) {
    if (confirm('Are you sure you want to delete this lesson?')) {
      this.lessons = this.lessons.filter((l) => l.id !== id);
    }
  }

  generateId(): number {
    return this.lessons.length
      ? Math.max(...this.lessons.map((l) => l.id)) + 1
      : 1;
  }

  formatDateTimeLocal(date: Date | string): string {
    const d = new Date(date);
    const offset = d.getTimezoneOffset();
    const local = new Date(d.getTime() - offset * 60000);
    return local.toISOString().slice(0, 16);
  }

  applyFilter(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const filterType = selectElement.value;

    const sortedLessons = [...this.lessons];

    switch (filterType) {
      case 'dateAsc':
        sortedLessons.sort(
          (a, b) =>
            new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        break;
      case 'dateDesc':
        sortedLessons.sort(
          (a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
      case 'titleAsc':
        sortedLessons.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'titleDesc':
        sortedLessons.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'filesAsc':
        sortedLessons.sort((a, b) => a.files.length - b.files.length);
        break;
      case 'filesDesc':
        sortedLessons.sort((a, b) => b.files.length - a.files.length);
        break;
      case 'lessonType':
        sortedLessons.sort((a, b) => a.lessonType.localeCompare(b.lessonType));
        break;
      default:
        return;
    }

    this.lessons = sortedLessons;
  }

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  onFileSelected(event: any) {
    const files : FileList= event.target.files;
    this.selectedFileNames = Array.from(files).map((file: File) => file.name);
  }

  // New method to validate form
  isFormValid(): boolean {
    return (
      this.formModel.title.trim() !== '' &&
      this.formModel.lessonType !== '' &&
      this.selectedFileNames.length > 0
    );
  }
}
