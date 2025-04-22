import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demande-rattrapage',
  standalone: false,
  templateUrl: './demande-rattrapage.component.html',
  styleUrls: ['./demande-rattrapage.component.css']
})
export class DemandeRattrapageComponent {
  demandeForm: FormGroup;
  submissionStatus: string = '';  // Status de soumission de la demande
  isSidebarCollapsed = false;
  constructor(private fb: FormBuilder) {
    this.demandeForm = this.fb.group({
      nomProfesseur: ['', [Validators.required]],
      matiere: ['', [Validators.required]],
      dateExamen: ['', [Validators.required]],
      raison: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  // UI Actions
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
  // Fonction pour soumettre la demande
  onSubmit(): void {
    if (this.demandeForm.valid) {
      this.submissionStatus = 'Votre demande a été envoyée avec succès !';
      alert(this.submissionStatus); // Display the alert with submissionStatus
      this.demandeForm.reset(); // Optionally reset the form
    } else {
      this.submissionStatus = 'Veuillez remplir tous les champs requis.';
      alert(this.submissionStatus); // Display the alert with submissionStatus
    }
  }

  // Accesseur pour les champs de formulaire
  get nomProfesseur() { return this.demandeForm.get('nomProfesseur'); }
  get matiere() { return this.demandeForm.get('matiere'); }
  get dateExamen() { return this.demandeForm.get('dateExamen'); }
  get raison() { return this.demandeForm.get('raison'); }
}
