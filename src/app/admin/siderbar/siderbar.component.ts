import { Component} from '@angular/core';
import { Router } from '@angular/router';
  
@Component({
  selector: 'siderbaradmin',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class Siderbaradmin{
  constructor(public router:Router){}
  title = 'siderbar';
  out()
  {
    localStorage.clear()
    this.router.navigateByUrl('/admin')
  }
}