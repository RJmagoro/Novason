import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NovasonLifeService } from '../novason-life.service';
import { BuymoduleModule } from '../buymodule/buymodule.module';
import { VerifyId } from '../class/verifyid';
import { ValidateCell } from '../class/validate-cell';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buynow2',
  templateUrl: './buynow2.page.html',
  styleUrls: ['./buynow2.page.scss'],
})
export class Buynow2Page implements OnInit, DoCheck {
  emailErr:string="";
  nameErr:string="";
  surnameErr:string="";
  titleErr:string="";
  phoneErr:string="";
  ageErr:string="";
  idnumErr:string="";
  verify = new VerifyId();
  validateCell = new ValidateCell();
  

  ngDoCheck(): void {
    this.emailErr="";
    this.nameErr="";
    this.surnameErr="";
    this.titleErr="";
    this.phoneErr="";
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

     //Cell Number errors
    if (this.buynow.controls["phone"].touched && !this.buynow.controls["phone"].value) {
      this.phoneErr = "Please fill in your phone number!";
    } else if (this.buynow.controls["phone"].touched && !this.validateCell.validateCell(this.buynow.controls["phone"].value)) {
      this.phoneErr = "Invalid phone Number!";
    }

    // title errors
  if(this.buynow.controls["title"].touched && !this.buynow.controls["title"].value){
    this.titleErr="Please select your title!";
  }

  // age  errors
  if(this.buynow.controls["age"].touched && !this.buynow.controls["age"].value){
    this.ageErr="Please select your age range!";
  }
   
  // email errors
  if(this.buynow.controls["email"].touched && !this.buynow.controls["email"].value){
    this.emailErr="Please enter your email!";
  // }else if(this.buynow.controls["email"].touched && !this.buynow.controls["email"] ){
  //     this.emailErr="invalid email format"
  }

  }
  public user: BuymoduleModule;
  constructor(private _service: NovasonLifeService, private _router: Router) { }
  
  ngOnInit() {
    
  }
  buynow = new FormGroup({
    email: new FormControl('' ,Validators.compose([
      Validators.required])),
     // ,
     // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    
    name: new FormControl(''),
    surname: new FormControl(''),
    title: new FormControl('',Validators.required),
    idNum: new FormControl('', Validators.pattern("[0-9]{13}")),
    phone:new FormControl(''),
    age:new FormControl('',Validators.required),
    
  });

  buyNow() {
    this.user = { name: this.buynow.controls['name'].value,
                  surname: this.buynow.controls['surname'].value,
                  title: this.buynow.controls['title'].value,
                  idNum: this.buynow.controls['idNum'].value,
                  email:this.buynow.controls['email'].value,
                  age:this.buynow.controls['age'].value,
                  phone: this.buynow.controls['phone'].value};
    
 
  }
}
