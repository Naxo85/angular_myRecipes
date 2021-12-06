import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  constructor(private router: Router, private authService: AuthService) {}

  getUserName() {
    return this.authService.user.userName;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['./auth']);
  }
}
