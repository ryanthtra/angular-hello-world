import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
  selector: 'courses', // CSS-style label <courses>
  template: `
  <input [(ngModel)]='this.title' /> <br />
  <p>{{ this.title | neotitle }}</p>
  `
})
export class CoursesComponent {
  title = 'the rise of the planet of the apes';

  text =
    'salfkjas s;dalfjsa;lf jsadfkjdsf;l js;fljsad;fl ajs;lsdja ;ljslasdlkjflasjd l;sadjf; lsaj;ldssdafasfadfsafsdaoiuufsadklfew';
}
