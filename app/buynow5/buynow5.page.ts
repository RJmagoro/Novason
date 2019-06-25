import { Component, OnInit, DoCheck } from '@angular/core';
import { Buymodule5Module } from '../buymodule5/buymodule5.module';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-buynow5',
  templateUrl: './buynow5.page.html',
  styleUrls: ['./buynow5.page.scss'],
})
export class Buynow5Page implements OnInit, DoCheck {
  ngDoCheck(): void {
 
    //throw new Error("Method not implemented.");
  }

  public user: Buymodule5Module;
  constructor() { }

  ngOnInit() {
 
  }
  buynow = new FormGroup({
    
    child: new FormControl(''),
   
  });

  buyNow() {
    this.user = {
       child: this.buynow.controls['child'].value
                 
                  };
    
 
  }

}
