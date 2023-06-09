import { Component, OnInit } from '@angular/core';
import { TabsComponent } from '../composants/tabs/tabs.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
constructor(
		private authService: AuthService,
	) {}

  ngOnInit() {
  }
	logout() {
		this.authService.logout();
	}
}
