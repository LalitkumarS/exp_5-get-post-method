import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class hello {
  title = 'hello Lalitkumar';
  name = 'Lalitkumar S';
  rollno = '22ITR055';
}