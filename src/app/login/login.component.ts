import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ApiService } from "../api.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;
  private showErrorMessage: boolean;

  constructor(private service: ApiService, private router: Router) {
    this.showErrorMessage = false;
  }
  ngOnInit() {
    if (localStorage.getItem("accessToken")) this.router.navigate(["/"]);
  }

  login() {
    this.service.login(this.username, this.password).subscribe(
      data => {
        localStorage.setItem("userName", this.username);
        localStorage.setItem("accessToken", data);
        this.router.navigate(["/home"]);
      },
      () => {
        this.showErrorMessage = true;
      },
    );
  }
}
