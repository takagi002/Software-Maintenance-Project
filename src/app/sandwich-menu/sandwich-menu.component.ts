import {Component} from "@angular/core";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'sandwich-menu',
  templateUrl: './sandwich-menu.component.html',
  styleUrls: ['./sandwich-menu.component.scss'],
})
export class SandwichMenuComponent {
  constructor(
    public router: Router,
  ) {}
   notLoggedIn(): boolean {
     const user = sessionStorage.getItem('myUser');
     return user == null;
   }

  logout(): void {
    sessionStorage.removeItem('myUser');
    this.router.navigate(['home']);
  }
}
