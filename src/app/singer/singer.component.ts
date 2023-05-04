import { Component } from '@angular/core';
import axios from 'axios';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.css']
})
export class Singer {
  constructor(private d:DuLieuService){}
  title = 'entertainment';
  thien=true
  khoa:any
  hien:boolean=false;
  hiennutpause:boolean=false;
  add:boolean=true;
  addplay:boolean=false;
  unadd:boolean=false;
  phat:boolean=true;
  unplay:boolean=false;
  hiennutplay:boolean=true;
  idsinger=this.d.data
  thie:any
  thi:any
  song:any
  songs:any
  singers:any
  quay=0

  ngOnInit():void
  {
    axios
    .get('http://localhost:3002/singer')
    .then((response)=> {
      this.singers=response.data
      this.thie=this.singers[this.idsinger].idsong.split(",",5)
    })
    .catch(function (error) {
      console.log(error);
    });

    axios
    .get('http://localhost:3002/music')
    .then((response)=> {
      this.song=response.data
    })
    .catch(function (error) {
      console.log(error);
    });


    axios
    .get('http://localhost:3002/singer')
    .then((response)=> {
      this.songs=response.data
      this.thi=this.songs[this.idsinger].idsong.split(",",7)
    })
    .catch(function (error) {
      console.log(error);
    });


  }

  music(value:any)
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
    if(scrollY>294)
    {
      this.hien=true
    }
    else if(scrollY<294)
    {
      this.hien=false
    }
    }
  follow(){
 this.add=true
 this.unadd=false
  }
  play(value:any)
  {
    value.play()
 this.addplay=true
 this.phat=false
 this.unplay=true
  }
  pause(value:any)
  {
    value.pause()
 this.unplay=false
 this.phat=true
  }
unfollow(){
  this.unadd=true
  this.add=false
  }
  thienn()
  {
    this.thien=true
    this.hiennutplay=true
    this.hiennutpause=false
  }
}