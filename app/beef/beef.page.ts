import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-beef',
  templateUrl: './beef.page.html',
  styleUrls: ['./beef.page.scss'],
})
export class BeefPage implements OnInit, DoCheck {
  cashErr:string="";

  ngDoCheck(): void {
    this.cashErr="";
    // if(this.buynow.controls["age"].touched && !this.buynow.controls["age"].value){
    //   this.cashErr="Please select your age range!";
    // }
    // throw new Error("Method not implemented.");
  }

  constructor() {
    
   }

  ngOnInit() {
  }

}
