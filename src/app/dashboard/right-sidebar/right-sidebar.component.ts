import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonslistComponent } from '../lessonslist/lessonslist.component';


@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  imports: [CommonModule, LessonslistComponent],
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent {
  events = [
    {
      profile: 'img.jpg',
      topic: 'Réunion parents-professeurs',
    },
    {
      profile: 'img.jpg',
      topic: 'Sortie pédagogique à Carthage',
    },
    {
      profile: 'img.jpg',
      topic: 'Conseil de classe terminale',
    },
    {
      profile: 'img.jpg',
      topic: 'Événement sportif inter-écoles',
    },
    {
      profile: 'img.jpg',
      topic: 'Journée portes ouvertes',
    },
  ];


  isResizing = false;
  sidebarWidth = 350; // Initial sidebar width

  onResizeStart(event: MouseEvent) {
    this.isResizing = true;
    const initialMouseX = event.clientX;
    const initialWidth = this.sidebarWidth;

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (this.isResizing) {
        const newWidth = initialWidth + (moveEvent.clientX - initialMouseX);
        this.sidebarWidth = Math.max(150, newWidth); // Prevent sidebar from becoming too small
        // Update the right-sidebar width dynamically
        const rightSidebar = document.querySelector('app-right-sidebar') as HTMLElement;
        rightSidebar.style.width = `${this.sidebarWidth}px`;
      }
    };

    const onMouseUp = () => {
      this.isResizing = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }
}
