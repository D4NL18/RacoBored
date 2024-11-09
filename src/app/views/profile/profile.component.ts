import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { HistoryCardComponent } from "../../components/history-card/history-card.component";
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavComponent, HistoryCardComponent, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  user: any = {};
  history: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const userId = sessionStorage.getItem('user_id');
    if (userId) {
      this.userService.getUserProfile(+userId).subscribe(data => {
        this.user = data.user;
      });

      this.userService.getUserHistory(+userId).subscribe(data => {
        this.history = data.history;
      });
    }
  }
}