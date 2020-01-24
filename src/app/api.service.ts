import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  protected authHeaders = new HttpHeaders({
    Authorization: localStorage["accessToken"],
  });
  protected headers = new HttpHeaders();

  constructor(protected http: HttpClient) {
    this.headers.append("Content-Type", "application/json");
    this.http;
  }

  login(username: string, password: string): Observable<string> {
    const info = JSON.stringify({ username: username, password: password });
    return this.http
      .post("/api/token", info, { headers: this.headers })
      .lift(res => res.headers.get("Authorization"));
  }

  signUp(username: string, password: string): Observable<string> {
    const info = JSON.stringify({ username: username, password: password });
    return this.http
      .post("/api/user", info, { headers: this.headers })
      .lift(res => res.headers.get("Authorization"));
  }

  getImage() {}

  saveImage() {}

  deleteImage() {}
}
