import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gettingstarted',
  templateUrl: './gettingstarted.component.html',
  styleUrls: ['./gettingstarted.component.css'],
})
export class Gettingstarted {
  title = 'gettingstarted';
  constructor(public router: Router) {}
}
