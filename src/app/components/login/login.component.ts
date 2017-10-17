import { Observable } from 'rxjs/Rx';
import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
//import {} from '../router.animations';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: any;

  //user: Observable<firebase.User>;
 
  constructor(public afAuth: AngularFireAuth,public router: Router) {
    
     this.afAuth.authState.subscribe(auth => {
        if(auth) {

          //this.user = afAuth.authState;
          this.router.navigateByUrl('/main-content');
        }
     });
   }

  ngOnInit() {
  }
  
  loginfb() {

    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
                                     (success) => {
                                       this.router.navigate(['/main-content']);
                                      }).catch(
                                      (err) => {
                                       this.error = err;
                                    })
  }

  login(){

    //this.afAuth.auth.signInWithEmailAndPassword();
  }
}
