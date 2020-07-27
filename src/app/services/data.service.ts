import { Injectable, NgZone } from "@angular/core";
import * as firebase from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  res: any;
  userData: any;
  public colist: any[];
  sampleData: Observable<any[]>;

  // If we inject authService in the constructor then there will be cyclic dependecy so just remove it from the constructor.
  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private afAuth: AngularFireAuth,
    private af: AngularFirestore,
    public zone: NgZone
  ) {}

  // Created the reference for realtime Db
  public df = firebase.database().ref().child("data");

  // Using an 'on' Event so it updates the data synchronously.

  display_details() {
    console.log("Display Fucntion Called");
    console.log(this.db.list("data").valueChanges());
    return this.db.list("data").valueChanges(); // returning an observable from db whenever changes happens in db.
    // let dataArr = [];
    // this.df.on("value", (snap) => {
    //   console.log(snap.val());
    //   dataArr.push(snap.val());
    // });
  }

  getUsers() {
    return this.af.collection("users").snapshotChanges();
  }
}
