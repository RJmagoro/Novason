import { Component, OnInit } from '@angular/core';
import { Buymodule9Module } from '../buymodule9/buymodule9.module';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-buynow9',
  templateUrl: './buynow9.page.html',
  styleUrls: ['./buynow9.page.scss'],
})
export class Buynow9Page implements OnInit {
  public users: Buymodule9Module;
  constructor() { }

  ngOnInit() {
  }
  buynow = new FormGroup({
    member: new FormControl(''),
   
  });

  buyNow() {
    this.users = { member: this.buynow.controls['member'].value,
    
  }
  }}
