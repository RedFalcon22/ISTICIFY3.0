import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  // Hardcoded lesson data for each subject
  private subjects = [
    { 
      name: 'sys_expl',
      description: 'System Exploration lessons',
      color: '#ffe7ba',
      txtcolor: '#d78d03',
      lessons: [
        { id: 1, uploadDate: new Date('2025-05-01T08:00:00'), title: 'Sys_Expl Lesson 1', files: ['sys_expl1.pdf', 'sys_expl2.pdf'], lessonType: 'TP' },
        { id: 2, uploadDate: new Date('2025-05-03T09:00:00'), title: 'Sys_Expl Lesson 2', files: ['sys_expl3.pdf'], lessonType: 'TP' }
      ],
    },
    {
      name: 'security',
      description: 'Cybersecurity lessons',
      color: '#e9efff',
      txtcolor: '#5272e9',
      lessons: [
        { id: 1, uploadDate: new Date('2025-05-01T08:00:00'), title: 'Security Lesson 1', files: ['security1.pdf', 'security2.pdf'], lessonType: 'TD' },
        { id: 2, uploadDate: new Date('2025-05-02T09:00:00'), title: 'Security Lesson 2', files: ['security3.pdf'], lessonType: 'TD' }
      ],
    },
    {
      name: 'ai',
      description: 'Artificial Intelligence lessons',
      color: '#ffbabe',
      txtcolor: '#ff5078',
      lessons: [
        { id: 1, uploadDate: new Date('2025-05-01T08:00:00'), title: 'AI Lesson 1', files: ['ai1.pdf', 'ai2.pdf'], lessonType: 'TP' },
        { id: 2, uploadDate: new Date('2025-05-02T09:00:00'), title: 'AI Lesson 2', files: ['ai3.pdf'], lessonType: 'TP' }
      ],
    },
    {
      name: 'web_dev',
      description: 'Web Development lessons',
      color: '#ffc9be',
      txtcolor: '#ff6500',
      lessons: [
        { id: 1, uploadDate: new Date('2025-05-10T09:00:00'), title: 'Web Dev Lesson 1', files: ['web1.pdf'], lessonType: 'TP' },
        { id: 2, uploadDate: new Date('2025-05-12T10:00:00'), title: 'Web Dev Lesson 2', files: ['web2.pdf', 'web3.pdf'], lessonType: 'TP' }
      ],
    }
  ];

  // Method to get lessons for a specific subject
  getLessonsForSubject(subjectName: string) {
    const subject = this.subjects.find(s => s.name === subjectName.toLowerCase());
    return subject ? subject.lessons : [];
  }

  // Method to add a new lesson, setting the current date for uploadDate
  addLesson(subjectName: string, lesson: any) {
    const subject = this.subjects.find(s => s.name === subjectName.toLowerCase());
    if (subject) {
      const newLesson = {
        id: this.generateId(subject.lessons),
        title: lesson.title,
        uploadDate: new Date(), // Set current date for uploadDate
        files: lesson.files || [],
        lessonType: lesson.lessonType
      };
      subject.lessons.push(newLesson);
    }
  }

  // Method to generate a new unique ID for a lesson
  generateId(lessons: any[]): number {
    return lessons.length ? Math.max(...lessons.map((l) => l.id)) + 1 : 1;
  }

  getSubjectDetails(subjectName: string) {
    return this.subjects.find(s => s.name === subjectName.toLowerCase());
  }
}
