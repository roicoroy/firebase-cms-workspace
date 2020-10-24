import { Component, Input } from '@angular/core';
import { getLogo, getDefaultAvatar } from 'src/app/shared/helpers/assets.helper';
import { toggleSidebar } from 'src/app/shared/helpers/layout.helper';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CurrentUserService } from 'src/app/shared/services/current-user.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @Input() isSticky: boolean = true;
  @Input() isCentered: boolean = false;
  @Input() showBrand: boolean = false;
  logo: string = getLogo();
  defaultAvatar = getDefaultAvatar();
  
  constructor(
    public currentUser: CurrentUserService,
    public navigation: NavigationService,
    private auth: AuthService
  ) {}
  getUserName(): string {
    return this.currentUser.data ? `${this.currentUser.data.firstName} ${this.currentUser.data.lastName}` : (
      this.auth.firebaseUser ? this.auth.firebaseUser.providerData[0].displayName || this.auth.firebaseUser.providerData[0].email : 'unknown'
    );
  }
  navigateToProfile(){
    this.navigation.getRouterLink('users', 'profile', this.currentUser.data?.id || '')
  }
  toggleSidebar(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    toggleSidebar();
  }
}
