import { Component, OnInit, NgZone } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "src/service/api.service";

@Component({
  selector: "email",
  templateUrl: "./email.component.html",
  styleUrls: ["./email.component.scss"],
})
export class EmailComponent implements OnInit {
  submitted = false;
  userForm: FormGroup;

  profileForm = this.fb.group({
    email: [
      "",
      [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
      ],
    ],
  });

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.warn(this.profileForm.value);
    this.submitted = true;

    this.apiService.createUser(this.profileForm.value).subscribe(
      (res) => {
        console.log("User successfully created");
        this.ngZone.run(() => this.router.navigateByUrl("/home-page"));
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
