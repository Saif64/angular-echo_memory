// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      font-family: 'Roboto', sans-serif;
    }
  `]
})
export class AppComponent {
  title = 'Echo Memory Privacy Policy';
}
