import { Component, OnInit } from '@angular/core';
import {  Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Buymodule4Module } from '../buymodule4/buymodule4.module';
import { NavController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-buynow4',
  templateUrl: './buynow4.page.html',
  styleUrls: ['./buynow4.page.scss'],
})
export class Buynow4Page implements OnInit {

//   train = 200;
//   trainvalue: any;
//   textChangeTrain: any;
  
// constructor(public navCtrl: NavController, public navParams: NavParams) {
//   this.textChangeTrain = ["Not Important", "Not that Important", "Neutral", "Important", "Very Important"];
//   this.trainvalue = this.textChangeTrain[2];
// }


// onChangeTrain() {
// if (this.train == 0) { this.trainvalue = this.textChangeTrain[0] }
// if (this.train == 100) { this.trainvalue = this.textChangeTrain[1] }
// if (this.train == 200) { this.trainvalue = this.textChangeTrain[2] }
// if (this.train == 300) { this.trainvalue = this.textChangeTrain[3] }
// if (this.train == 400) { this.trainvalue = this.textChangeTrain[4] }
// }

  @Input('progress') progress;
  public user: Buymodule4Module;
  public loadProgress : number = 0;  
 

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
