// home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-container">
      <div class="logo-container">
        <img src="assets/echo-memory-logo.png" alt="Echo Memory Logo" class="logo">
        <h1>Echo Memory</h1>
      </div>
      <div class="links-container">
        <a routerLink="/privacy-policy" class="policy-link">Privacy Policy</a>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #4b6cb7 0%, #182848 100%);
      color: white;
      text-align: center;
      padding: 20px;
    }

    .logo-container {
      margin-bottom: 40px;
    }

    .logo {
      max-width: 150px;
      height: auto;
      margin-bottom: 16px;
    }

    h1 {
      font-size: 2.5rem;
      margin: 0;
      font-weight: 700;
    }

    .links-container {
      margin-top: 30px;
    }

    .policy-link {
      display: inline-block;
      background-color: rgba(255, 255, 255, 0.2);
      color: white;
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 30px;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .policy-link:hover {
      background-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
    }
  `]
})
export class HomeComponent {

}
