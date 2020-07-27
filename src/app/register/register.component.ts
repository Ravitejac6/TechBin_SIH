import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { DataService } from "../services/data.service";
import * as firebase from "firebase/app";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  public firebaseData: Observable<any>;

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    // this.checkData();
  }
  res: any;
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.res = params.get("res");
      console.log(this.res);
      this.authService.string_set(this.res);
    });
    this.firebaseData = this.dataService.display_details(); // Retrieving data from a realtime db.
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin();
    this.router.navigate(["/login"]);
  }
  tryAnonymousLogin() {
    this.authService.anonymousLogin();
    this.router.navigate(["/user"]);
  }

  checkData() {
    // this.authService.display_details();
  }
}
