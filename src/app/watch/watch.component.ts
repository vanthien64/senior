import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class Watch {
  title = 'entertainment';
  constructor(private router:Router, private d:DuLieuService){}
  thien=true
  khoa=true
  add:boolean=true
  addd:boolean=true
  hiennutplay:boolean=true;
  hiennutpause:boolean=false;
  tuongtu:boolean=false
  id=this.d.movie
  movie:any
  outstanding:any
  movies:any
  yt={}


  ngOnInit():void
  {
    axios
    .get('http://localhost:3002/flim')
    .then((response)=> {
      this.movie=response.data
      
    })
    .catch(function (error) {
      console.log(error);
    });

    axios
    .get('http://localhost:3002/flim')
    .then((response)=> {
      this.movies=response.data
      this.outstanding=this.movies.splice(21,27)
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  
  music(value:any)
  {  
 
    value.play()
    this.hiennutplay=false
    this.khoa=false
    this.tuongtu=true
}
  siderbar()
  {
 this.add=false
  }
  blackground()
  {
    this.add=true
  }
  pause()
  {
    this.khoa=true
    this.hiennutplay=true
  }
  choice( value:any)
  {
  this.id=value
  }
  yeuthich(value:any)
  {
    this.yt={iduser:this.id,idmovie:value, idsong:""}
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