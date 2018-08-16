import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-poc-ui';
  data: Array<any> = [
    { text: "My Profile" },
    { text: "Friend Requests" },
    { text: "Account Settings" },
    { text: "Support" },
    { text: "Log out" }
  ];
}
