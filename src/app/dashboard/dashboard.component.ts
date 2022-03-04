import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: any;
  constructor(private token: TokenStorageService) { }
  ngOnInit(): void {
    this.currentUser = window.sessionStorage.getItem('auth-user');
    this.currentUser = JSON.parse(this.currentUser).user;
  }

  onClick(): void {
    window.sessionStorage.clear();
    window.location.reload();
  }

}
