// quiz.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  // Hardcoded quiz data for each subject
  private quizzes = [
    {
      subject: 'sys_expl', // Related subject
      quizzes: [
        { id: 1, title: 'Sys_Expl Quiz 1', uploadDate: new Date('2025-05-01'), questions: ['What is Sys_Expl?'], answers: [] },
        { id: 2, title: 'Sys_Expl Quiz 2', uploadDate: new Date('2025-05-03'), questions: ['What is System Exploration?'], answers: [] },
      ],
    },
    {
      subject: 'security',
      quizzes: [
        { id: 1, title: 'Security Quiz 1', uploadDate: new Date('2025-05-01'), questions: ['What is Cybersecurity?'], answers: [] },
        { id: 2, title: 'Security Quiz 2', uploadDate: new Date('2025-05-02'), questions: ['What are firewalls?'], answers: [] },
      ],
    },
    {
      subject: 'ai',
      quizzes: [
        { id: 1, title: 'AI Quiz 1', uploadDate: new Date('2025-05-01'), questions: ['What is AI?'], answers: [] },
        { id: 2, title: 'AI Quiz 2', uploadDate: new Date('2025-05-02'), questions: ['What is Machine Learning?'], answers: [] },
      ],
    },
    {
      subject: 'web_dev',
      quizzes: [
        { id: 1, title: 'Web Dev Quiz 1', uploadDate: new Date('2025-05-10'), questions: ['What is HTML?'], answers: [] },
        { id: 2, title: 'Web Dev Quiz 2', uploadDate: new Date('2025-05-12'), questions: ['What is CSS?'], answers: [] },
      ],
    },
  ];

  // Get quizzes for a specific subject
  getQuizzesForSubject(subjectName: string) {
    const subject = this.quizzes.find(s => s.subject === subjectName.toLowerCase());
    return subject ? subject.quizzes : [];
  }

  // Method to add a quiz
  addQuiz(subjectName: string, quiz: any) {
    const subject = this.quizzes.find(s => s.subject === subjectName.toLowerCase());
    if (subject) {
      subject.quizzes.push(quiz);
    }
  }

  // Method to edit a quiz
  editQuiz(subjectName: string, quizId: number, updatedQuiz: any) {
    const subject = this.quizzes.find(s => s.subject === subjectName.toLowerCase());
    if (subject) {
      const quiz = subject.quizzes.find(q => q.id === quizId);
      if (quiz) {
        Object.assign(quiz, updatedQuiz);
      }
    }
  }

  // Method to delete a quiz
  deleteQuiz(subjectName: string, quizId: number) {
    const subject = this.quizzes.find(s => s.subject === subjectName.toLowerCase());
    if (subject) {
      const index = subject.quizzes.findIndex(q => q.id === quizId);
      if (index !== -1) {
        subject.quizzes.splice(index, 1);
      }
    }
  }
}
