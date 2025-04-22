import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
interface MenuItem {
  icon: SafeHtml;
  label: string;
  children?: MenuItem[];
  isOpen?: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [CommonModule, RouterModule],
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() isSidebarCollapsed = false;
  @Output() sidebarToggle = new EventEmitter<void>();
// Gestion de la sous-liste "Marquer absences"
showAbsenceSubMenu = false; // Afficher/masquer la sous-liste
selectedClass: string | null = null; // Classe sélectionnée
showAbsenceModal = false; // Afficher/masquer la fenêtre modale des absences
students: string[] = []; // Liste des élèves de la classe sélectionnée
  menuItems: MenuItem[];

  // User object with dynamic name and profile picture
  user = {
    name: 'John Doe',
    profilePic: 'img.jpg'  // Path to user profile picture
  };

  constructor(private sanitizer: DomSanitizer, private router: Router) {
    this.menuItems = [
      {
        icon: this.sanitizeSvg(`
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
          </svg>`),
        label: 'Dashboard',
        isOpen: false,
      },
      {
        icon: this.sanitizeSvg(`
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M3 4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V4zm2 0v16h12V4H5zm3 2h6v2H8V6zm0 4h6v2H8v-2zm0 4h6v2H8v-2z"/>
          </svg>`),
        label: 'Lessons',
        isOpen: false,
      },
      {
        icon: this.sanitizeSvg(`
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
            <path d="m438-240 226-226-58-58-169 169-84-84-57 57 142 142ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/>
          </svg>`),
        label: 'Homework',
      },
      {
        icon: this.sanitizeSvg(`
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
            <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/>
          </svg>`),
        label: 'Classes',
      },
      {
        icon: this.sanitizeSvg(`
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
            <path d="m576-160-56-56 104-104-104-104 56-56 104 104 104-104 56 56-104 104 104 104-56 56-104-104-104 104Zm79-360L513-662l56-56 85 85 170-170 56 57-225 226ZM80-280v-80h360v80H80Zm0-320v-80h360v80H80Z"/>
          </svg>`),
        label: 'Présence',
      },
      {
        icon: this.sanitizeSvg(`
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
            <path d="M320-160q-33 0-56.5-23.5T240-240v-120h120v-90q-35-2-66.5-15.5T236-506v-44h-46L60-680q36-46 89-65t107-19q27 0 52.5 4t51.5 15v-55h480v520q0 50-35 85t-85 35H320Zm120-200h240v80q0 17 11.5 28.5T720-240q17 0 28.5-11.5T760-280v-440H440v24l240 240v56h-56L510-514l-8 8q-14 14-29.5 25T440-464v104ZM224-630h92v86q12 8 25 11t27 3q23 0 41.5-7t36.5-25l8-8-56-56q-29-29-65-43.5T256-684q-20 0-38 3t-36 9l42 42Zm376 350H320v40h286q-3-9-4.5-19t-1.5-21Zm-280 40v-40 40Z"/>
          </svg>`),
        label: 'Moyennes',
      },
      {
        icon: this.sanitizeSvg(`
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>`),
        label: 'Parametres',
      },
    ];
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
    toggleAbsenceSubMenu() {
      this.showAbsenceSubMenu = !this.showAbsenceSubMenu;
    }

  sanitizeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  toggleMenuItem(item: MenuItem) {
    if (!this.isSidebarCollapsed && item.children) {
      item.isOpen = !item.isOpen;
    }
  }

  formatLabel(label: string): string {
    console.log(label.toLowerCase().replace(/\s+/g, '-'));
    return label.toLowerCase().replace(/\s+/g, '-');

  }

  showLessons = false;

  toggleLessons() {
    this.showLessons = !this.showLessons;
  }




  // Toggle the entire sidebar (triggered by the toggle button)
  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  goToSubjectManagement(event: Event, subject: string) {
    event.preventDefault(); // Prevents default anchor behavior
    this.router.navigate(['/subject-management', subject]);
  }

}
