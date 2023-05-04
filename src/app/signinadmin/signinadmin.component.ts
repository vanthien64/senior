import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'signinadmin',
  templateUrl: './signinadmin.component.html',
  styleUrls: ['./signinadmin.component.css']
})
export class Signinadmin {
  title = 'entertainment'
  constructor(private router:Router, private d: DuLieuService){};
  signinn(value:any)
  {
    axios
    .post('http://localhost:3002/auth/admin/login',value)
    .then((response)=> {
      localStorage.setItem('admintoken', response.data.token)
      localStorage.setItem('adminrefreshtoken', response.data.refreshtoken)
      this.router.navigateByUrl('/admin/homepage')
    })
    .catch(function (error) {
      console.log(error);
    });
}
}