import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import Swal from 'sweetalert2';
@Injectable({ providedIn: 'root' })
export class CanEnter implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (null != sessionStorage.getItem('myUser')) {
      return true;
    }

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'This user is not registered!',
    });
    return false;
  }
}
