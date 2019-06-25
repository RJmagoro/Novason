import { Component, OnInit } from '@angular/core';
import { Buymodule6Module } from '../buymodule6/buymodule6.module';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-buynow6',
  templateUrl: './buynow6.page.html',
  styleUrls: ['./buynow6.page.scss'],
})
export class Buynow6Page implements OnInit {

  public user: Buymodule6Module;
  public loadProgress : number = 0;  
  constructor() { }

  ngOnInit() {
 
    
  }
  buynow = new FormGroup({
    
    children: new FormControl(''),
    
  });

  buyNow() {
    this.user = { children: this.buynow.controls['children'].value,
                  
                  };
    
 
  }

}
