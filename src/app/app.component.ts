import { Component } from '@angular/core';
import * as firebase from 'firebase';
//import 'firebase/auth';
//import 'firebase/firestore';
//import 'firebase/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      constructor(){

      var firebaseConfig = {
        apiKey: "AIzaSyBBLpE3tueSKblOzNvfnGGw8829sfYsLvA",
        authDomain: "appareil-90762.firebaseapp.com",
        databaseURL: "https://appareil-90762.firebaseio.com",
        projectId: "appareil-90762",
        storageBucket: "appareil-90762.appspot.com",
        messagingSenderId: "941076825334",
        appId: "1:941076825334:web:137311556984bfa8e098d7",
        measurementId: "G-NT5W0F9GPF"
      };
      // Initialize Firebase
      firebase.default.initializeApp(firebaseConfig);
      //firebase.analytics();

    }
  }