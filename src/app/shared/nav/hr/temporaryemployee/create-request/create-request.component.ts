import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.scss']
})
export class CreateRequestComponent implements OnInit {
  tmpemployeecreate: FormGroup;
  constructor() { }

  ngOnInit() {
    this.tmpemployeecreate = new FormGroup({
      role: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required,Validators.email]),
      phoneext: new FormControl('', [Validators.required,Validators.pattern(/^\+[0-9]+$/)]),
      phonenumber: new FormControl('', [Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]),
      currentdesgination: new FormControl('', Validators.required),
      currentcompany: new FormControl('', Validators.required),
      adhar: new FormControl('', Validators.required),
    });
  }

  get f() {
    return this.tmpemployeecreate.controls;
  }

}
