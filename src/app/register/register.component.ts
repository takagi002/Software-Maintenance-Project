import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ConfirmValidation } from '../ConfirmValidation';
import { UserService } from '../user.service';
import {User} from "../../models/User";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  loginName = '';
  registerForm: FormGroup;
  repitedName = false;
  constructor(
    public active: ActivatedRoute,
    public userService: UserService,
    public router: Router,
  ) {
    active.params.subscribe((param) => {
      this.loginName = param.name;
    });
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        name: new FormControl(this.loginName, Validators.required),
        address: new FormControl('', Validators.required),
        mail: new FormControl('', Validators.compose([Validators.required])),
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', Validators.required),
      },
      ConfirmValidation.confirm('password', 'confirmPassword'),
    );
  }

  send(): void {
    const user = new User(
      -1,
      this.registerForm.value.name,
      this.registerForm.value.address,
      this.registerForm.value.mail,
      this.registerForm.value.password
    );
    this.userService.addUser(user).subscribe(
      (secc) => {
        console.log(secc);
        this.repitedName = false;
        this.getUser(secc);
        this.Pop();
      },
      (error) => {
        console.log(error);
        this.repitedName = true;
      },
    );
  }
  Pop(): void {
    Swal.fire({
      title: 'thank you',
      text: 'you have seccesfully registered ',
      icon: 'success',
      confirmButtonText: 'to see the recipes',
    }).then((result) => {
      if (result.isConfirmed === true) {
        this.router.navigate(['allRecipes']);
      }
    });
  }
  getUser(user): void {
    sessionStorage.setItem('myUser', JSON.stringify(user));
  }
}
