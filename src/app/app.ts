import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InsetoCard } from './inseto-card/inseto-card';

@Component({
  imports: [RouterOutlet, InsetoCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('insetos');
}
