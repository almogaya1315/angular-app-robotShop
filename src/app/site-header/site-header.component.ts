import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { flatMap } from 'rxjs';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  user: IUser | null = null;
  showSignOutMenu: boolean = false;

  constructor(private userSvc:UserService, private router: Router) { }

  ngOnInit(): void {
    this.userSvc.getUser().subscribe({
      next: (user) => { this.user = user } 
    });
  }

  toggleSignOutMenu(){
      this.showSignOutMenu = !this.showSignOutMenu;
  }

  signOut(){
    this.userSvc.signOut();
    this.showSignOutMenu = false;
    this.router.navigate(['/sign-in']);
  }
}
