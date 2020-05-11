import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: "email",
  templateUrl: "./email.component.html",
  styleUrls: ["./email.component.scss"],
})
export class EmailComponent implements OnInit {
  profileForm = this.fb.group({
    email: [
      "",
      [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
      ],
    ],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  // Getter to access form control
  get myForm() {
    return this.profileForm.controls;
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
