import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  name: any;

title = 'Pacesetter';

  constructor(public afAuth: AngularFireAuth, public router: Router) { 
  
    this.afAuth.authState.subscribe(auth => {
      if(auth) {

        this.name = auth;
      }
   });
  }

  ngOnInit() {
  }

  logout(){
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }

}
