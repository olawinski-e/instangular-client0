import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./components/pages/home-page/home-page.component";
import { SignupComponent } from "./components/auth/signup/signup.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home-page" },
  { path: "home-page", component: HomePageComponent },
  { path: "signup", component: SignupComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
