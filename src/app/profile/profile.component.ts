import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: string;

  constructor() { }

  ngOnInit() {
    // const id = +this.activatedRoute.snapshot.paramMap.get('JSESSIONID');
    // console.log(id);
    // this.heroService.getHero(id).subscribe(hero => this.selectedHero = hero);
  }

  requestApi() {

  }

}
