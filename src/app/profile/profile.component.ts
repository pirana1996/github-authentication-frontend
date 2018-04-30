
import { Component, OnInit } from '@angular/core';

import {Headers, RequestOptions, Response} from '@angular/http';

import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  token: string;

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    // this.token = this.activatedRoute.snapshot.paramMap.get('auth');
    this.token = this.activatedRoute.snapshot.queryParamMap.get('jwt');
    console.log(this.token);
  }


  requestApi() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this.token})
    };

    this.httpClient.get(`/api/user`, httpOptions).subscribe(o => console.log(o));
    // this.httpClient.get(`/api/user`, httpOptions)
    //   .subscribe(response => console.)
  }

}
