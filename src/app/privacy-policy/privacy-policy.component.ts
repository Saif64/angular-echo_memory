// privacy-policy.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  template: `
    <div class="policy-container">
      <div class="policy-header">
        <a routerLink="/" class="back-button">← Home</a>
        <div class="title-container">
          <h1>Privacy Policy</h1>
          <p class="last-updated">Last Updated: {{ lastUpdated }}</p>
        </div>
      </div>

      <div class="policy-content">
        <section>
          <h2>Introduction</h2>
          <p>
            Thank you for choosing to use Echo Memory ("the Game"). This Privacy Policy is designed to help you understand how we collect, use, and safeguard your information when you use our mobile application.
          </p>
          <p>
            By downloading, installing, or using the Game, you agree to the terms outlined in this Privacy Policy. If you do not agree with our policies and practices, please do not use the Game.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <p>
            <strong>We collect minimal personal information:</strong>
          </p>
          <ul>
            <li>
              <strong>Game Progress Data:</strong> We store your game progress, scores, achievements, and settings locally on your device to enhance your gaming experience.
            </li>
            <li>
              <strong>Device Information:</strong> When you use the Game, we may automatically collect certain information about your device, including device type, operating system, and unique device identifiers.
            </li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li>To provide and maintain the Game</li>
            <li>To save your game progress and settings</li>
            <li>To track achievements and high scores</li>
            <li>To improve the Game based on how users interact with it</li>
            <li>To detect and address technical issues</li>
          </ul>
        </section>

        <section>
          <h2>Data Storage</h2>
          <p>
            Echo Memory predominantly stores your game data locally on your device using standard storage mechanisms provided by your device's operating system. This includes:
          </p>
          <ul>
            <li>Game progress</li>
            <li>High scores</li>
            <li>Difficulty settings</li>
            <li>Achievement data</li>
            <li>Daily challenge results</li>
          </ul>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>
            Our Game may use third-party services that collect information. These third-party services have their own privacy policies addressing how they use such information.
          </p>
          <ul>
            <li>
              <strong>Google Play Services:</strong> We use Google Play Services for achievements and leaderboards. Please refer to Google's Privacy Policy for more information.
            </li>
            <li>
              <strong>Analytics:</strong> We may use analytics tools to understand how users interact with the Game to improve user experience.
            </li>
          </ul>
        </section>

        <section>
          <h2>Children's Privacy</h2>
          <p>
            Our Game is suitable for all ages, including children. We do not knowingly collect personally identifiable information from children under 13. If we discover that a child under 13 has provided us with personal information, we will delete this information from our servers immediately.
          </p>
        </section>

        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:
          </p>
          <p class="contact-info">
            <strong>Email:</strong> privacy@echomemory.com
          </p>
        </section>
      </div>

      <footer>
        <p>© {{ currentYear }} Echo Memory. All rights reserved.</p>
      </footer>
    </div>
  `,
  styles: [`
    .policy-container {
      min-height: 100vh;
      background-color: #f8f9fa;
      padding: 0 0 40px 0;
      color: #333;
    }

    .policy-header {
      background: linear-gradient(135deg, #4b6cb7 0%, #182848 100%);
      color: white;
      padding: 40px 20px;
      text-align: center;
      position: relative;
    }

    .back-button {
      position: absolute;
      left: 20px;
      top: 20px;
      color: white;
      text-decoration: none;
      font-weight: 500;
      display: flex;
      align-items: center;
      transition: all 0.2s ease;
    }

    .back-button:hover {
      transform: translateX(-3px);
    }

    .title-container {
      max-width: 800px;
      margin: 0 auto;
    }

    h1 {
      font-size: 2.5rem;
      margin: 0;
      font-weight: 700;
    }

    .last-updated {
      margin-top: 10px;
      opacity: 0.8;
      font-style: italic;
    }

    .policy-content {
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 20px;
      background-color: white;
      border-radius: 0 0 10px 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    }

    section {
      margin-bottom: 30px;
    }

    h2 {
      color: #4b6cb7;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 1px solid #eee;
    }

    p, ul {
      line-height: 1.6;
      margin-bottom: 16px;
    }

    ul {
      padding-left: 20px;
    }

    li {
      margin-bottom: 8px;
    }

    .contact-info {
      background-color: #f8f9fa;
      padding: 15px;
      border-radius: 5px;
      border-left: 4px solid #4b6cb7;
    }

    footer {
      text-align: center;
      padding: 20px;
      margin-top: 40px;
      color: #666;
      font-size: 0.9rem;
    }
  `]
})
export class PrivacyPolicyComponent {
  lastUpdated: string = 'March 10, 2025';
  currentYear: number = new Date().getFullYear();
}
