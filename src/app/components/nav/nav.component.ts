import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  isCollapsed = true;

  menuItems = [
    { label: 'Tasks', icon: 'task', link: 'addTask' },
    { label: 'Profile', icon: 'person', link: 'profile' },
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
