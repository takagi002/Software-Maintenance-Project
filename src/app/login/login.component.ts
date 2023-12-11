import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = null;
  isExist = true;
  isPasswordCorrect = true;
  isValid: any;

  constructor(
    public userService: UserService,
    public router: Router,
  ) {}

  ngOnInit(): void {}

  checkAndLogin(pwd, name): void {
    this.userService.getUserByName(name).subscribe(user => {
      if (user.Password == pwd) {
        this.user = user;
        sessionStorage.setItem('myUser', JSON.stringify(this.user));
      }
    })
    this.router.navigate(['allRecipes']);
  }
  login(secc): void {
    this.isValid = secc;
    if (this.isValid === 1) {
      this.getUser(this.user);
      this.router.navigate(['allRecipes']);
    } else {
      if (this.isValid === 2) {
        this.isPasswordCorrect = false;
      } else {
        if (this.isValid === 3) {
          this.isExist = false;
        }
      }
    }
  }

  goToRegister(name): void {
    this.router.navigate(['register', name]);
  }

  getUser(user): void {
    this.userService.getUser(user).subscribe(
      (secc) => {
        sessionStorage.setItem('myUser', JSON.stringify(secc));
      },
      (error) => {
        console.log(error);
      },
    );
  }
}
