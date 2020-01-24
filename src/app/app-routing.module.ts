import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyDirectiveDirective } from "./my-directive.directive";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [{ path: "", component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [MyDirectiveDirective],
})
export class AppRoutingModule {}
