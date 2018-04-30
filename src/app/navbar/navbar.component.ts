import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'app';
  userHere: string;

  constructor(private httpClient: HttpClient) {}

  btnClicked() {
    this.httpClient.get('http://localhost:8080/user')
      .subscribe(
        (res: Response) => {
          console.log(res.headers);
          this.userHere = 'true';
        }
      );
  }
}
