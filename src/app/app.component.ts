import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";
import { Location } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title;
  constructor(
    private authService: AuthService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = "bootDash";

    if (window.location.href === "http://localhost:4200/sessions/signin") {
      console.log("signin page");
    } else {
      this.authService.checkAccess();
      // console.log(window.location.href);
    }
  }
}
