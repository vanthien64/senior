import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class Header {
  title = 'entertainment';
  siderbar:boolean=false
  siderbarout:boolean=true
  id=localStorage.getItem('iduser')
  constructor(public router:Router){}
  userr:any
  ngOnInit():void
  {
  if(localStorage.getItem('token'))
  {
    this.siderbar=true
    this.siderbarout=false
  }
  else if(!localStorage.getItem('token'))
  {
    this.siderbar=false
    this.siderbarout=true
    console.log('thien')
  }
  }

  signout()
  {
    localStorage.clear()
    this.router.navigateByUrl('')
  }
}