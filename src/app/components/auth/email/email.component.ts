import { Component, OnInit, NgZone } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "src/services/api.service";

@Component({
  selector: "email",
  templateUrl: "./email.component.html",
  styleUrls: ["./email.component.scss"],
})
export class EmailComponent implements OnInit {
  submitted = false;
  control: FormControl;

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
  ) {
    this.control = fb.control({ value: "email", disabled: true });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.warn(this.profileForm.value);
    this.submitted = true;

    this.apiService.createUser(this.profileForm.value).subscribe(
      (res) => {
        console.log("User successfully created");
        this.ngZone.run(() => this.router.navigateByUrl("/"));
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
