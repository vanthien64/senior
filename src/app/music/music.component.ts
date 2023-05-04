import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class Music {
 

  
  
  ngOnInit():void
  {
    axios
    .get('http://localhost:3002/music')
    .then((response)=> {
      this.musics=response.data
      this.outstanding=this.musics.splice(0,10)
      
    })
    .catch(function (error) {
      console.log(error);
    });

    axios
    .get('http://localhost:3002/singer')
    .then((response)=> {
      this.singers=response.data
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  title = 'entertainment';
  thien=true
  musics:any
  singers:any
  khoa:any
  outstanding:any
  hiennutplay:boolean=true;
  hiennutpause:boolean=false;
  name:any
  namesinger:any
  song:boolean=true
  constructor(private router:Router, private d:DuLieuService){}
  idsinger:any
  id=localStorage.getItem('iduser')
  yt={}
  choice(value:any, music:any)
  {  
    console.log(value)
   if(this.thien || value.currentTime==value.duration)
   {
    value.play()
    this.thien=false
    this.hiennutplay=false
    this.hiennutpause=true
    this.khoa=value.play()
    console.log()
    this.name=music.name
    this.namesinger=music.singer
    this.song=false
   }
   else if( !this.thien || value.currentTime!=value.duration )
   {
    value.pause()
    this.thien=true
    this.hiennutplay=true
    this.hiennutpause=false
    this.song=true
   }
}
choicesinger(value:any)
{
 this.d.data=value
 this.router.navigateByUrl('/singer');
}
yeuthich(value:any)
  {
    this.yt={iduser:this.id,idsong:value-1, idmovie:""}
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