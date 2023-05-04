import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class Movie {
  title = 'entertainment';
  constructor(private router:Router, private d:DuLieuService){}
  thien=true
  movies:any
  flims:any
  khoa:any
  hots:any
  news:any
  id=localStorage.getItem('iduser')
  yt={}
  ngOnInit():void
  {
    axios
    .get('http://localhost:3002/flim')
    .then((response)=> {
      this.movies=response.data
      this.hots=this.movies.splice(0,8)
      this.news=this.movies.splice(0,8)
      
    })
    .catch(function (error) {
      console.log(error);
    });

  axios
    .get('http://localhost:3002/flim')
    .then((response)=> {
      this.flims=response.data.splice(0,28)
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  movie(value:any)
  { this.d.movie=value
    this.router.navigateByUrl('/movie/watch');
  }
  yeuthich(value:any)
  {
    this.yt={iduser:this.id,idmovie:value-1, idsong:""}
    console.log(this.yt)
    console.log(value)
    axios
    .post('http://localhost:3002/favourite',this.yt)
    .then((response)=> {
      console.log('thiện')
    })
    .catch(function (error) {
      console.log(error);
    });
 
  }
}