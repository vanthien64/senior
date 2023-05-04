import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
  
@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class Admin {
  title = 'admin';
  constructor(public router: Router){}
  ngOnInit():void
  {
  if(!localStorage.getItem('admintoken'))
  {
    this.router.navigateByUrl('')
  }
  }
}