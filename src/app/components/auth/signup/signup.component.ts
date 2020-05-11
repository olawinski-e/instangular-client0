import { Component, OnInit, NgZone } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "src/app/service/api.service";
import { Router } from "@angular/router";

@Component({
  selector: "signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  submitted = false;
  userForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    console.log(this.userForm);
  }

  mainForm() {
    this.userForm = this.fb.group({
      fullname: ["", [Validators.required]],
      encryptedPassword: ["", [Validators.required]],
      username: ["", [Validators.required]],
      website: [""],
      biography: [""],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
        ],
      ],
      phoneNumber: ["", [Validators.pattern("^[0-9]+$")]],
      gender: [""],
      profilePic: [""],
    });
  }

  // Getter to access form control
  get myForm() {
    console.log("form control");
    return this.userForm.controls;
  }

  onSubmit() {
    // this.submitted = true;
    // if (!this.userForm.valid) {
    //   console.log("errrrrorrrrr");
    //   return false;
    // } else {
    //   this.apiService.createUser(this.userForm.value).subscribe(
    //     (res) => {
    //       console.log("User successfully created");
    //       this.ngZone.run(() => this.router.navigateByUrl("/homepage-desktop"));
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // }
  }
}
