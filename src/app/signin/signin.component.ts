import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class Signin {
  title = 'entertainment'
  constructor(private router:Router, private d: DuLieuService){};
  signinn(value:any)
  {
    axios
    .post('http://localhost:3002/auth/login',value)
    .then((response)=> {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('refreshtoken', response.data.refreshtoken)
      localStorage.setItem('iduser', response.data.iduser)
      this.router.navigateByUrl('/homepage')
    })
    .catch(function (error) {
      console.log(error);
    });
}
}