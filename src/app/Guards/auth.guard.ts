import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);

  // return false;

  let token = localStorage.getItem('token');

  if (token) {
    return true;
  } else {
    router.navigateByUrl('/login');
    alert('go to log in');
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool',
    });
    return false;
  }
};
