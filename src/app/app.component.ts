import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Welcome to {{title}}!!</h1>
  <app-shipping></app-shipping>          1
   `,
  styles: []
})
export class AppComponent {
  title = 'app';
}