import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-generals',
  templateUrl: './generals.page.html',
  styleUrls: ['./generals.page.scss'],
})
export class GeneralsPage implements OnInit {

  ngOnInit() {
    this.ionViewWillEnter()
  }
  user = null;
 
  constructor(private auth: AuthService) {}
 
  ionViewWillEnter() {
    this.user = this.auth.getUser();
    console.log(this.user);
    
  }
 
  logout() {
    this.auth.logout();
  }

}
