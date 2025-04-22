import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-messagerie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './messagerie.component.html',
  styleUrl: './messagerie.component.css'
})
export class MessagerieComponent {
  showChatWindow = false;
  activeTab: 'student' | 'admin' = 'student';
  adminMessage: string = '';
  messageSent: boolean = false;

  studentMessages: { text: string; timestamp: Date; isUser: boolean }[] = [
    { text: 'Bonjour, j\'ai une question sur le cours.', timestamp: new Date(), isUser: false },
    { text: 'Bien sûr, de quoi as-tu besoin ?', timestamp: new Date(), isUser: true },
  ];

  studentMessageInput: string = '';
  @ViewChild('messageContainer') messageContainer!: ElementRef;

  showAbsenceSubMenu = false;
  selectedClass: string | null = null;
  showAbsenceModal = false;
  students: string[] = [];

  switchTab(tab: 'student' | 'admin') {
    this.activeTab = tab;
    this.messageSent = false;
  }

  toggleChatWindow() {
    this.showChatWindow = !this.showChatWindow;
  }

  sendAdminMessage() {
    if (this.adminMessage.trim()) {
      console.log('Message envoyé à l\'administrateur :', this.adminMessage);
      this.messageSent = true;
      this.adminMessage = '';
    }
  }

  sendStudentMessage() {
    if (this.studentMessageInput.trim()) {
      this.studentMessages.push({
        text: this.studentMessageInput,
        timestamp: new Date(),
        isUser: true,
      });

      this.studentMessageInput = '';

      setTimeout(() => {
        this.scrollToBottom();
      }, 0);
    }
  }

  scrollToBottom() {
    if (this.messageContainer) {
      this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
    }
  }

}
