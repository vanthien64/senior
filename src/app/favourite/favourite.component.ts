import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class Favourite {
  title = 'favourite';
  hien:boolean=false;
  song=['']
  songs:any
  movies:any
  movie=['']
  music:any
  flim:any
  quay=0
  constructor(private router:Router, private d:DuLieuService){}
  ngOnInit():void
  {
    axios
    .get('http://localhost:3002/favourite')
    .then((response)=> {
      for(let i=0;i<response.data.length;i++)
      { 
        if(response.data[i].iduser==localStorage.getItem('iduser') )
        {
          this.song.push(response.data[i].idsong)
          this.songs=this.song.filter((num: string) => num !== "")
          this.movie.push(response.data[i].idmovie)  
          this.movies=this.movie.filter((num: string) => num !== "")
          console.log(this.movies)
        }
      }
      
    })
    .catch(function (error) {
      console.log(error);
    });


    axios
    .get('http://localhost:3002/music')
    .then((response)=> {
              this.music=response.data
    })
    .catch(function (error) {
      console.log(error);
    });


    axios
    .get('http://localhost:3002/flim')
    .then((response)=> {
              this.flim=response.data
    })
    .catch(function (error) {
      console.log(error);
    });


  }
  nhac(value:any)
  {  
    if(this.quay==0)
    {
    value.play()
    this.quay=1
    }
    else if(this.quay==1)
    {
      value.pause()
      this.quay=0
    }
   }
  srcoll()
  {   
    if(scrollY>240)
    {
      this.hien=true
    }
    else if(scrollY<240)
    {
      this.hien=false
    }
    }
phim(value:any)
{
  this.d.movie=value
  this.router.navigateByUrl('/movie/watch');
}

}