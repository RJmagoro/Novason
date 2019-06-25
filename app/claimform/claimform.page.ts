import { Component, OnInit } from '@angular/core';
import{ FormControl, FormGroup} from '@angular/forms';
import { NovasonLifeService } from '../novason-life.service';
import { ClaimsmoduleModule } from '../claimsmodule/claimsmodule.module';

@Component({
  selector: 'app-claimform',
  templateUrl: './claimform.page.html',
  styleUrls: ['./claimform.page.scss'],
})
export class ClaimformPage implements OnInit {
 public user: ClaimsmoduleModule;
  constructor(private _service: NovasonLifeService) { }
  ngOnInit() {
    
  }
  buynow = new FormGroup({
    type: new FormControl(''),
    name: new FormControl(''),
    pname: new FormControl(''),
    altenative: new FormControl(''),
    certificate: new FormControl(''),
    id: new FormControl(''),
    phone:new FormControl(''),
    
  });

  buyNow() {
    this.user = { name: this.buynow.controls['name'].value,
                  pname: this.buynow.controls['name'].value,
                  type: this.buynow.controls['type'].value,
                  altenative: this.buynow.controls['altenative'].value,
                  id: this.buynow.controls['id'].value,
                  certificate:this.buynow.controls['certificate'].value,
                  phone: this.buynow.controls['phone'].value};
    
  
  }
}