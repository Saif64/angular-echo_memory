// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PrivacyPolicyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
