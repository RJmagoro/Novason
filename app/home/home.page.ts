import { Component } from '@angular/core';

import { from } from 'rxjs';
import { RestService } from '../rest.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // users: any;
  // constructor(public navCtrl: NavController, public restProvider: RestService) {
  //   this.getUsers();
  // }
  // getUsers() {
  //   this.restProvider.getUsers()
  //   .then(data => {
  //     this.users = data;
  //     console.log(this.users);
  //   });
  // }
}
