
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DuLieuService {
  constructor(public router: Router) {}
  data: any;
  movie:any
  user:any
  yeuthich:any
}
