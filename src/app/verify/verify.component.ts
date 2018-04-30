import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log("Hello bad boy");
    // const tokenNumber = +this.activatedRoute.snapshot.paramMap.get('code');
    // console.log(tokenNumber);
  }

}
