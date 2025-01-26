import { Component, inject } from '@angular/core';
import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';
import { ProfileService } from './data/services/profile.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCardComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'talk';
  profileService = inject(ProfileService);
  profiles: any = [];

  constructor() {
    this.profileService.getTestAccount().subscribe(
      (data) => {
        this.profiles = data; // Обрабатываем данные, полученные от сервиса
      },
      (error) => {
        console.error('Error fetching profiles', error); // Обрабатываем ошибку, если она возникла
      }
    );
  }
}
