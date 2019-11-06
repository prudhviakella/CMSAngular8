import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetpassword: FormGroup;
  constructor() {

  }

  ngOnInit() {
    this.forgetpassword = new FormGroup({
      username: new FormControl('', [Validators.required,Validators.email]),
    });
  }

}
