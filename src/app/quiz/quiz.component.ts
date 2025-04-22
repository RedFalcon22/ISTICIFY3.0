import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../dashboard/sidebar/sidebar.component';
import { MessagerieComponent } from '../messagerie/messagerie.component';

interface Choice {
  [key: string]: string;
}

interface Question {
  question: string;
  choices: Choice;
  right: string[];
}

interface Quiz {
  id: number;
  title: string;
  date: string;
  questions: Question[];
}

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent, MessagerieComponent],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  subjectId: string = '';
  quizzes: Quiz[] = [];
  showAddForm = false;
  filter: string = 'date';
  sortOrder: string = 'asc';
  isSidebarCollapsed = false;
  currentQuestionIndex: number = 0;

  newQuiz: Quiz = {
    id: 0,
    title: '',
    date: new Date().toISOString().split('T')[0],
    questions: [this.createEmptyQuestion()]
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subjectId = this.route.snapshot.paramMap.get('id') || 'unknown';
    this.loadQuizzes();
  }

  // Helper methods
  private createEmptyQuestion(): Question {
    return {
      question: '',
      choices: { a: '', b: '', c: '' },
      right: []
    };
  }

  getCurrentQuestion(): Question {
    return this.newQuiz.questions[this.currentQuestionIndex];
  }

  // UI Actions
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
    if (this.showAddForm) {
      this.resetForm();
    }
  }

  // Quiz Form Methods
  addQuestion() {
    this.newQuiz.questions.push(this.createEmptyQuestion());
    this.currentQuestionIndex = this.newQuiz.questions.length - 1;
  }

  removeQuestion(index: number) {
    if (this.newQuiz.questions.length > 1) {
      this.newQuiz.questions.splice(index, 1);
      this.currentQuestionIndex = Math.max(0, this.currentQuestionIndex - 1);
    }
  }

  validateQuiz(): boolean {
    if (!this.newQuiz.title || this.newQuiz.title.trim() === '') {
      return false;
    }

    return this.newQuiz.questions.every(q => {
      return q.question.trim() !== '' && 
             Object.values(q.choices).every(c => c.trim() !== '') &&
             q.right.length > 0;
    });
  }

  addQuiz() {
    if (this.validateQuiz()) {
      const newQuiz = {
        ...this.newQuiz,
        id: Date.now()
      };
      this.quizzes.push(newQuiz);
      this.sortQuizzes();
      this.resetForm();
      this.showAddForm = false;
    }
  }

  deleteQuiz(id: number) {
    this.quizzes = this.quizzes.filter(q => q.id !== id);
  }

  resetForm() {
    this.newQuiz = {
      id: 0,
      title: '',
      date: new Date().toISOString().split('T')[0],
      questions: [this.createEmptyQuestion()]
    };
    this.currentQuestionIndex = 0;
  }

  // Sorting and filtering
  sortQuizzes() {
    this.quizzes.sort((a, b) => {
      let compareVal = 0;
      if (this.filter === 'date') {
        compareVal = new Date(a.date).getTime() - new Date(b.date).getTime();
      } else {
        compareVal = a.title.localeCompare(b.title);
      }
      return this.sortOrder === 'asc' ? compareVal : -compareVal;
    });
  }

  // Answer management
  toggleRightAnswer(choiceKey: string) {
    const currentQuestion = this.getCurrentQuestion();
    const index = currentQuestion.right.indexOf(choiceKey);
    if (index === -1) {
      currentQuestion.right.push(choiceKey);
    } else {
      currentQuestion.right.splice(index, 1);
    }
  }

  isRightAnswer(choiceKey: string): boolean {
    return this.getCurrentQuestion().right.includes(choiceKey);
  }

  // Data loading
  private loadQuizzes() {
    // Example data - replace with API call
    this.quizzes = [
      {
        id: 1,
        title: 'Introduction Quiz',
        date: '2025-05-15',
        questions: [
          {
            question: 'What is 2+2?',
            choices: { a: '3', b: '4', c: '5' },
            right: ['b']
          }
        ]
      }
    ];
    this.sortQuizzes();
  }
  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}