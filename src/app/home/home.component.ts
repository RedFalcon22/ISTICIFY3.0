import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  showChatWindow = false; // Contrôle l'affichage de la fenêtre de chat
  activeTab: 'student' | 'admin' = 'student'; // Onglet actif
  adminMessage: string = ''; // Message pour l'administrateur
  messageSent: boolean = false; // Confirmation d'envoi

  // Liste des messages pour le chat étudiant
  studentMessages: { text: string; timestamp: Date; isUser: boolean }[] = [
    { text: 'Bonjour, j\'ai une question sur le cours.', timestamp: new Date(), isUser: false },
    { text: 'Bien sûr, de quoi as-tu besoin ?', timestamp: new Date(), isUser: true },
  ];

  // Message en cours de saisie par l'utilisateur
  studentMessageInput: string = '';

  // Référence au conteneur des messages
  @ViewChild('messageContainer') messageContainer!: ElementRef;

  // Gestion de la sous-liste "Marquer absences"
  showAbsenceSubMenu = false; // Afficher/masquer la sous-liste
  selectedClass: string | null = null; // Classe sélectionnée
  showAbsenceModal = false; // Afficher/masquer la fenêtre modale des absences
  students: string[] = []; // Liste des élèves de la classe sélectionnée

  // Basculer entre les onglets
  switchTab(tab: 'student' | 'admin') {
    this.activeTab = tab;
    this.messageSent = false; // Réinitialiser la confirmation
  }

  // Ouvrir/fermer la fenêtre de chat
  toggleChatWindow() {
    this.showChatWindow = !this.showChatWindow;
  }

  // Envoyer un message à l'administrateur
  sendAdminMessage() {
    if (this.adminMessage.trim()) {
      console.log('Message envoyé à l\'administrateur :', this.adminMessage);
      this.messageSent = true;
      this.adminMessage = ''; // Réinitialiser le champ de texte
    }
  }

  // Envoyer un message dans le chat étudiant
  sendStudentMessage() {
    if (this.studentMessageInput.trim()) {
      // Ajouter le message de l'utilisateur à la liste des messages
      this.studentMessages.push({
        text: this.studentMessageInput,
        timestamp: new Date(),
        isUser: true,
      });

      // Réinitialiser le champ de saisie
      this.studentMessageInput = '';

      // Faire défiler vers le bas après l'ajout d'un message
      setTimeout(() => {
        this.scrollToBottom();
      }, 0);
    }
  }

  // Faire défiler vers le bas du conteneur des messages
  scrollToBottom() {
    if (this.messageContainer) {
      this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
    }
  }

  // Afficher/masquer la sous-liste "Marquer absences"
  toggleAbsenceSubMenu() {
    this.showAbsenceSubMenu = !this.showAbsenceSubMenu;
  }

  // Sélectionner une classe
  selectClass(className: string) {
    this.selectedClass = className;
    this.showAbsenceModal = true; // Afficher la fenêtre modale
    this.loadStudents(className); // Charger la liste des élèves
  }

  // Charger la liste des élèves (simulée)
  loadStudents(className: string) {
    // Exemple de données simulées
    if (className === 'glsi2a') {
      this.students = ['Élève 1', 'Élève 2', 'Élève 3'];
    } else if (className === 'glsi2b') {
      this.students = ['Élève 4', 'Élève 5', 'Élève 6'];
    } else if (className === 'glsi2c') {
      this.students = ['Élève 7', 'Élève 8', 'Élève 9'];
    }
  }

  // Marquer un élève comme absent
  markAbsent(student: string) {
    console.log(`${student} est marqué comme absent.`);
    // Ajoutez ici la logique pour enregistrer l'absence
  }
}