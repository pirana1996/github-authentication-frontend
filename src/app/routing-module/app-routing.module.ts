import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {ProfileComponent} from '../profile/profile.component';
import {NavbarComponent} from "../navbar/navbar.component";
import {Verify} from "crypto";
import {VerifyComponent} from "../verify/verify.component";

// Routes or Route[]
const router: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'api/login/github', component: VerifyComponent},
  {path: 'home', component: NavbarComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  // Initializing a rooter delivered by RouterModule
  imports: [
    RouterModule.forRoot(router)
  ],
  // Exporting initialized rooter
  exports: [RouterModule]
})
export class AppRoutingModule {

}
