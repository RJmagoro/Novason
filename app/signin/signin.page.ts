import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, DoCheck } from '@angular/core';
import { NovasonLifeService } from '../novason-life.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit, DoCheck {
  formErr: string = "";
  btn: boolean = false;
  users: any = [];
  constructor(private _service: NovasonLifeService, private _router: Router) { }

  ngDoCheck() {
    this.formErr = "";
    if (this.user.controls["idNum"].touched && !this.user.controls["idNum"].value) {
      this.formErr = "Enter your ID Number!";
    } else if (this.user.controls["idNum"].touched && !this.user.controls["idNum"].valid) {
      this.formErr = "Invalid ID Number!";
    }

    if (this.user.controls["pin"].touched && !this.user.controls["pin"].value) {
      this.formErr = "Enter your pin!";
    } else if (this.user.controls["pin"].touched && !this.user.controls["pin"].valid) {
      this.formErr = "Invalid Pin!";
    }

    if (this.user.controls["pin"].touched && !this.user.controls["pin"].value &&
      this.user.controls["idNum"].touched && !this.user.controls["idNum"].value) {
      this.formErr = "Enter your pin and ID number!";
    }

    for (let i = 0; i < Object.keys(this.users).length; i++) {
      if (this.user.controls["idNum"].touched && this.user.controls["pin"].touched &&
        this.user.controls["idNum"].value == this.users[i].idNumber && this.user.controls["pin"].value != this.users[i].password) {
        this.formErr = "Incorrect Pin or ID number!";
        break;
      } else if (this.user.controls["idNum"].touched && this.user.controls["idNum"].value != this.users[i].idNumber &&
        this.user.controls["idNum"].value && this.user.controls["idNum"].value.length == 13) {
        this.formErr = "ID Number don't exist!";
      }
    }

    if (this.formErr.length > 0 || !this.user.controls["pin"].value || !this.user.controls["idNum"].value)
      this.btn = false;

    if (this.formErr.length == 0 && this.user.controls["pin"].value && this.user.controls["idNum"].value)
      this.btn = true;
  }

  ngOnInit() {
    this.getAllUsers();
  }

  user = new FormGroup({
    idNum: new FormControl("", Validators.pattern("[0-9]{13}")),
    pin: new FormControl("", Validators.pattern("[0-9]{5}"))
  });

  signIn() {
    let id = this.user.value.idNum;
    let pin = this.user.value.pin;

    this._service.getSignInCustomer(id, pin).subscribe(res => {
      this._service.customerSetSession(res);
      this._router.navigateByUrl("/landing");
      this.user.reset();
    })
  }

  getAllUsers() {
    this._service.getCustomers().subscribe(res => {
      if (res) {
        for (let i = 0; i < Object.keys(res).length; i++) {
          this.users.push({ idNumber: res[i].idNumber, password: res[i].password });
        }
      }
    });
  }
}
