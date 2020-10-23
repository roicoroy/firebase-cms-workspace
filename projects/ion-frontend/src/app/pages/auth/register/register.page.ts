import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getLogo } from 'src/app/shared/helpers/assets.helper';
import { UserRole } from 'src/app/shared/models/collections/user.model';
import { UsersService } from 'src/app/shared/services/collections/users.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  logo: string = getLogo();
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';
  error: string = null;

  constructor(
    public navigation: NavigationService,
    private users: UsersService,
  ) { }

  ngOnInit() {
  }
navigate(){
  return this.navigation.getRouterLink('login'); 
}
  onSubmit(event: Event, submitButton: HTMLButtonElement | any) {
    const form = event.target as any;
    form.isSubmitted = true;
    if (form.checkValidity() && this.password === this.passwordConfirmation) {
      const startLoading = () => {
        submitButton.isDisabled = true;
        submitButton.isLoading = true;
      };
      const stopLoading = () => {
        submitButton.isDisabled = false;
        submitButton.isLoading = false;
      };
      startLoading();
      this.users.register({
        firstName: 'App',
        lastName: 'User',
        email: this.email,
        password: this.password,
        role: UserRole.Guest,
        birthDate: null,
        bio: null
      }).then(() => {
        this.navigation.redirectTo(`login?email=${this.email}&password=${this.password}`);
      }).catch((error: Error) => {
        console.error(error);
      }).finally(() => {
        stopLoading();
      });
    }
  }

  dismissError(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.error = null;
  }

}
