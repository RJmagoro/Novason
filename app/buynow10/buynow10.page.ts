
import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NovasonLifeService } from '../novason-life.service';
import { Buymodule10Module } from '../buymodule10/buymodule10.module';
import { VerifyId } from '../class/verifyid';
import { ValidateCell } from '../class/validate-cell';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buynow10',
  templateUrl: './buynow10.page.html',
  styleUrls: ['./buynow10.page.scss'],
})
export class Buynow10Page implements OnInit, DoCheck {

  nameErr:string="";
  surnameErr:string="";
  ageErr:string="";
  idnumErr:string="";
  verify = new VerifyId();
  validateCell = new ValidateCell();
  

  ngDoCheck(): void {
    
    this.nameErr="";
    this.surnameErr="";
    this.ageErr="";
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

    
  // age  errors
  if(this.buynow.controls["age"].touched && !this.buynow.controls["age"].value){
    this.ageErr="Please select your age range!";
  }
   
  }




  public users: Buymodule10Module;
  constructor() { }

  ngOnInit() {
  }
  buynow = new FormGroup({
    
  name: new FormControl(''),
  surname: new FormControl(''),
  idNum: new FormControl(''),
  age: new FormControl(''),
   
    
    
  });

  buyNow() {
    this.users = { name: this.buynow.controls['name'].value,
    surname: this.buynow.controls['surname'].value,
    idNum: this.buynow.controls['town'].value,
    age: this.buynow.controls['age'].value,
    
                  
    
 
  }}}


