import { Component } from '@angular/core';
import { DummyService } from './dummy.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 8';
}