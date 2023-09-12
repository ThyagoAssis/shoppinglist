import { Injectable } from '@angular/core';

import { AuthService } from '../servico/auth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardaloginGuard implements CanActivate {


  constructor(
    private as:  AuthService,
    private routerControl: Router
  ){}

  canActivate(): Promise<boolean>{
    return new Promise( results => {
      this.as.getAuth().onAuthStateChanged(user => {
        if(user) this.routerControl.navigate(['footer']);
        results(!user ? true: false)
      })
    })
  }
  
}
