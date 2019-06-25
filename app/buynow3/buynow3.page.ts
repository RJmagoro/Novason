import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Buymodule3Module } from '../buymodule3/buymodule3.module';

@Component({
  selector: 'app-buynow3',
  templateUrl: './buynow3.page.html',
  styleUrls: ['./buynow3.page.scss'],
})
export class Buynow3Page implements OnInit {
  public users: Buymodule3Module;
  constructor() { }

  ngOnInit() {
  }
  buynow = new FormGroup({
    address: new FormControl(''),
    suburb: new FormControl(''),
    town: new FormControl(''),
    code: new FormControl(''),
    email: new FormControl(''),
    
    
  });

  buyNow() {
    this.users = { address: this.buynow.controls['address'].value,
    suburb: this.buynow.controls['suburb'].value,
    town: this.buynow.controls['town'].value,
    code: this.buynow.controls['code'].value,
    email: this.buynow.controls['email'].value,
                  
    
 
  }
}
}