import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class Homepage {
  title = 'entertainment';
  constructor(public router: Router){}
  ngOnInit():void
  {
  if(!localStorage.getItem('token'))
  {
    this.router.navigateByUrl('')
  }
  }
}