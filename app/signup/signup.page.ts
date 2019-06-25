import { ValidateCell } from './../class/validate-cell';
import { VerifyId } from './../class/verifyid';
import { Customer } from './../class/customer';
import { Component, OnInit, ɵConsole, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NovasonLifeService } from '../novason-life.service';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit, DoCheck {
  idErr: string = "";
  numbErr: string = "";
  pinErr: string = "";
  rePinErr: string = "";
  verify = new VerifyId();
  validateCell = new ValidateCell();
  checkedbtn: boolean = false;

  constructor(private _service: NovasonLifeService, private _router: Router) { }

  ngDoCheck() {
    this.idErr = "";
    this.numbErr = "";
    this.pinErr = "";
    this.rePinErr = "";
    this.checkedbtn = false;

    //ID Number errors
    if (this.user.controls["idNum"].touched && !this.user.controls["idNum"].value) {
      this.idErr = "Please fill in your ID Number!";
    } else if (this.user.controls["idNum"].touched && !this.verify.verifyID(parseInt(this.user.controls["idNum"].value))) {
      this.idErr = "Invalid id Number!";
    }

    //Cell Number errors
    if (this.user.controls["mobile"].touched && !this.user.controls["mobile"].value) {
      this.numbErr = "Please fill in your mobile number!";
    } else if (this.user.controls["mobile"].touched && !this.validateCell.validateCell(this.user.controls["mobile"].value)) {
      this.numbErr = "Invalid Mobile Number!";
    }

    //Pin Errors
    if (this.user.controls["pin"].touched && !this.user.controls["pin"].value) {
      this.pinErr = "Please enter a pin for your account!";
    } else if (this.user.controls["pin"].touched && !parseInt(this.user.controls["pin"].value)) {
      this.pinErr = "Pin should contain numbers only!";
    } else if (this.user.controls["pin"].touched && this.user.controls["pin"].value.length < 5) {
      this.pinErr = "Pin should be 5 digits!";
    }

    //Retyped Pin
    if (this.user.controls["rePin"].touched && this.user.controls["pin"].value != this.user.controls["rePin"].value) {
      this.rePinErr = "Pin don't match!";
    }

    //enable button
    if (this.user.controls["terms"].value && this.numbErr.length == 0 && this.idErr.length == 0 && this.pinErr.length == 0 && this.rePinErr.length == 0 &&
      this.user.value.pin && this.user.value.rePin && this.user.value.mobile && this.user.value.idNum) {
      this.checkedbtn = this.user.controls["terms"].value;
    }
  }

  ngOnInit() {

  }

  user = new FormGroup({
    idNum: new FormControl("", Validators.pattern("[0-9]{13}")),
    mobile: new FormControl,
    pin: new FormControl("", Validators.pattern("[0-9]{5}")),
    rePin: new FormControl("", Validators.pattern("[0-9]{5}")),
    terms: new FormControl
  });

  signUp() {
    let idNumber: string = "";
    let customerContact: string = "";

    if (this.user.value.idNum) {
      for (let i = 0; i < (this.user.value.idNum.length); i++) {
        if (this.user.value.idNum[i] != " ") {
          idNumber += this.user.value.idNum[i];
        }
      }

      if (!this.verify.verifyID(parseInt(idNumber))) {
        this.idErr = "Invalid id Number!";
      }
    }

    if (this.user.value.mobile) {
      for (let i = 0; i < (this.user.value.mobile.length); i++) {
        if (this.user.value.mobile[i] != " ") {
          customerContact += this.user.value.mobile[i];
        }
      }

      if (!this.validateCell.validateCell(customerContact)) {
        this.numbErr = "Invalid Mobile number!";
      }
    }

    if (this.numbErr.length == 0 && this.idErr.length == 0 && this.pinErr.length == 0 && this.rePinErr.length == 0 &&
      this.user.value.pin && this.user.value.rePin && this.user.value.mobile && this.user.value.idNum) {
      let customer: Customer = {
        id: formatDate(Date(), "yyMMddmmss", "en_ZA") + (Math.round((Math.random() * 99999) + 1000)).toString(),
        idNumber: idNumber,
        customerContact: customerContact,
        password: this.user.value.pin
      }

      this._service.postCustomer(customer).subscribe(res => {
        this._router.navigateByUrl("/signin");
        this.user.reset();
      },
        err => {
          console.log(err)
        });
    }
  }
}