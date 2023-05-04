import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Siderbar } from 'src/app/siderbar/siderbar.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Favourite } from './favourite/favourite.component';
import { Header} from './header/header.component'
import { Homepage } from './homepage/homepage.component';
import { Library } from './library/library.component';
import { Movie } from './movie/movie.component';
import { Music } from './music/music.component'
import { Playlist } from './playlist/playlist.component';
import { Search } from './search/search.component';
import { Buying } from './buying/buying.component';
import { Signin } from './signin/signin.component';
import { Signup } from './signup/signup.component';
import { Singer } from './singer/singer.component';
import { Watch } from './watch/watch.component';
import { FormsModule } from '@angular/forms';
import { Gettingstarted } from './gettingstarted/gettingstarted.component';
import { Admin } from './admin/admin.component';
import { Managefilm } from './admin/managefilm/managefilm.component';
import { Managemusic } from './admin/managemusic/managemusic.component';
import { Managepoint } from './admin/managepoint/managepoint.component';
import { Siderbaradmin } from './admin/siderbar/siderbar.component';
import { Headeradmin } from './admin/header/header.component';
import { Managesinger } from './admin/managesinger/managesinger.component';
import { Signinadmin } from './signinadmin/signinadmin.component';
import { Chartcicle } from './admin/chartcicle/chartcicle.component';
import { Chartcolum } from './admin/chartcolum/chartcolum.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Chartciclee } from './admin/chartciclee/chartciclee.component';


@NgModule({
  declarations: [
    AppComponent,
    Header,
    Homepage,
    Signin,
    Signup,
    Music,
    Siderbar,
    Singer,
    Favourite,
    Search,
    Library,
    Playlist,
    Movie,
    Watch,
    Buying,
    Gettingstarted,
    Admin,
    Managefilm,
    Managemusic,
    Managepoint,
    Siderbaradmin,
    Headeradmin,
    Managesinger,
    Signinadmin,
    Chartcicle,
    Chartcolum, 
    Chartciclee
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
