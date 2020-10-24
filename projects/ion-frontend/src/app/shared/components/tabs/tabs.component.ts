import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getLogo, getDefaultAvatar } from '../../helpers/assets.helper';
import { AuthService } from '../../services/auth.service';
import { CurrentUserService } from '../../services/current-user.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  logo: string = getLogo();
  defaultAvatar = getDefaultAvatar();

  constructor(
    public currentUser: CurrentUserService,
    public navigation: NavigationService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() { }

  getUserName(): string {
    return this.currentUser.data ? `${this.currentUser.data.firstName} ${this.currentUser.data.lastName}` : (
      this.auth.firebaseUser ? this.auth.firebaseUser.providerData[0].displayName || this.auth.firebaseUser.providerData[0].email : 'unknown'
    );
  }
  navigateToProfile() {
    this.navigation.getRouterLink('users', 'profile', this.currentUser.data?.id || '')
  }
  goHome() {
    this.router.navigateByUrl('home');
  }
  goMedia() {
    this.router.navigateByUrl('media');
  }
  goProfile() {
    this.router.navigateByUrl('profile');
  }
}
