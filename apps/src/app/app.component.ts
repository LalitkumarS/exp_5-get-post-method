import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { hello } from './hello.component';
import { sample } from './sample/sample.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,hello,sample],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {
  title = 'apps';
  name = 'Lalitkumar S';
  rollno = '22ITR055';
}
