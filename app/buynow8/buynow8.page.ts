import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Buymodule8Module } from '../buymodule8/buymodule8.module';

@Component({
  selector: 'app-buynow8',
  templateUrl: './buynow8.page.html',
  styleUrls: ['./buynow8.page.scss'],
})
export class Buynow8Page implements OnInit {

  public user: Buymodule8Module;
  constructor() { }

  ngOnInit() {
 
    
  }
  buynow = new FormGroup({
    
    extended: new FormControl(''),
   
  });

  buyNow() {
    this.user = {
       extended: this.buynow.controls['extended'].value
                 
                  };
    
 
  }

}
