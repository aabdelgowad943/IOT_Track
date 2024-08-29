import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // title: string;
  // favs: string[];
  // constructor() {
  //   this.title = 'first_project';
  //   this.favs = ['a', 'b', 'c', 'd'];
  // }
}
