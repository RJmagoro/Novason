import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  
	public appPages = [
    {
      title: 'Home',
      url: '/landing',
      icon: 'home'
      
    },
    {
      title: 'Login',
      url: '/signin',
      icon: 'log-in'
    },
    {
      title: 'Products',
      url: '/products',
      icon: 'list'
    },
    // {
    //   title: 'Buy now',
    //   url: '/buynow2',
    //   icon: 'cart'
    // },
    {
      title: 'Claims',
      url: '/claims',
      icon: 'cash'
    },
    {
      title: 'Contacts',
      url: '/contacts',
      icon: 'call'
    },
    {
      title: 'Help',
      url: '/help',
      icon: 'help-circle'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http:Http
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
