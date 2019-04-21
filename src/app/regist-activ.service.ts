import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Service} from './service';


@Injectable()
export class RegistActivService implements CanActivate {

  constructor(private auth: Service) {
  }

  canActivate(): boolean {
    return this.auth.isServic();
  }

}
