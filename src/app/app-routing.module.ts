import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Favourite } from './favourite/favourite.component';
import { Homepage } from './homepage/homepage.component';
import { Library } from './library/library.component';
import { Movie } from './movie/movie.component';
import { Music } from './music/music.component';
import { Playlist } from './playlist/playlist.component';
import { Search } from './search/search.component';
import { Buying } from './buying/buying.component';
import { Signin } from './signin/signin.component';
import { Signup } from './signup/signup.component';
import { Singer } from './singer/singer.component';
import { Watch } from './watch/watch.component';
import { Gettingstarted } from './gettingstarted/gettingstarted.component';
import { Admin } from './admin/admin.component';
import { Managemusic } from './admin/managemusic/managemusic.component';
import { Managefilm } from './admin/managefilm/managefilm.component';
import { Managepoint } from './admin/managepoint/managepoint.component';
import { Managesinger } from './admin/managesinger/managesinger.component';
import { Signinadmin } from './signinadmin/signinadmin.component';

const routes: Routes = [
  {path:'homepage', component: Homepage},
  {
    path:'signin', component:Signin
  },
  {
    path:'signup', component:Signup
  },
  {
    path:'music', component:Music
  },
  {
    path:'singer', component:Singer
  },
  {
    path:'favourite', component:Favourite
  },
  {
    path:'search',component:Search
  },
  {
    path:'library', component:Library
  },
  {
    path:'playlist', component:Playlist
  },
  {
    path:'movie', component:Movie
  },
  {
    path:'movie/watch', component:Watch
  },
  {
    path:'buying', component:Buying
  },
  {
    path:'gettingstarted', component:Gettingstarted
  }, 
  {
    path:'admin/homepage', component:Admin
  },
  {
    path:'admin/managemusic', component:Managemusic
  },
  {
    path:'admin/managefilm', component:Managefilm
  },
  {
    path:'admin/managepoint', component:Managepoint
  },
  {
    path:'admin/managesinger', component:Managesinger
  },
  {
    path:'admin', component:Signinadmin
  },
  {
    path:'', component:Gettingstarted
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
