import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello_World';
  imgUrl="../assets/download.png";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
    }
}
