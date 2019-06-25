import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-paystack',
  templateUrl: './paystack.page.html',
  styleUrls: ['./paystack.page.scss']
  
})
export class PaystackPage implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get("http://localhost:8080/home").toPromise().then(r=> r.json()).then(r=>this.dukes=r);
  }

  dukes=[{name:"saki"},{name:'mary'}];
  list=[{name:"sofie", id:2},{name:"lindi",id:1},{name:"snay"}]
 
  getFilms() {
    return this.http.get('http://localhost:8080/home');
  }

}
