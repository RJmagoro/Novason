import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NovasonLifeService } from '../novason-life.service';

import { VerifyId } from '../class/verifyid';

import { Router } from '@angular/router';

import { Buymodule7Module } from '../buymodule7/buymodule7.module';

@Component({
  selector: 'app-buynow7',
  templateUrl: './buynow7.page.html',
  styleUrls: ['./buynow7.page.scss'],
})
export class Buynow7Page implements OnInit {
  nameErr:string="";
  surnameErr:string="";
  idnumErr:string="";
  verify = new VerifyId();
  
  ngDoCheck(): void {
    
    this.nameErr="";
    this.surnameErr="";
    this.idnumErr="";


    // name errors
   if(this.buynow.controls["name"].touched && !this.buynow.controls["name"].value){
    this.nameErr="Please enter your name!";
  }else if (this.buynow.controls["name"].touched && parseInt(this.buynow.controls["name"].value)){
     this.nameErr="Name should contain letters only!";
  }
 
  
  // surname errors
  if(this.buynow.controls["surname"].touched && !this.buynow.controls["surname"].value){
   this.surnameErr="Please enter your surname!";
 }else if (this.buynow.controls["surname"].touched && parseInt(this.buynow.controls["surname"].value)){
    this.nameErr="Surname should contain letters only!";
 }

    //ID Number errors
    
    if (this.buynow.controls["idNum"].touched && !this.buynow.controls["idNum"].value) {
      this.idnumErr = "Please fill in your ID Number!";
    } else if (this.buynow.controls["idNum"].touched && !this.verify.verifyID(parseInt(this.buynow.controls["idNum"].value))) {
      this.idnumErr = "Invalid id Number!";
    }

    
   
  }



  public user: Buymodule7Module;
  constructor() { }

  ngOnInit() {
  }
  buynow = new FormGroup({
    
    name: new FormControl(''),
    surname: new FormControl(''),
    
    idNum: new FormControl(''),
    
    
  });

  buyNow() {
    this.user = { name: this.buynow.controls['name'].value,
                  surname: this.buynow.controls['surname'].value,
                  
                  idNum: this.buynow.controls['idNum'].value,
                  };
    
 
  }

}
