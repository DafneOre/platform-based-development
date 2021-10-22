import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My chess club';

  constructor(
    public authService: AuthService,
    private router: Router
  ) {

  }

  logout() {
    console.log(this.authService.getCurrentUser().username);
    this.authService.logout()
    this.router.navigate(['/']);
  }
}
