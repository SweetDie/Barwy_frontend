import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private isThemeDark = false;

  @HostBinding('class')
  get themeMode() {
    return this.isThemeDark ? 'theme-dark' : 'theme-light';
  }
}
