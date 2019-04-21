import {Injectable} from '@angular/core';

@Injectable()
export class RegistrService {

  registrationData = {
      name: null,
      surname: null,
      email: null,
      phone: null
    };


  isPassword = false;

  isPass() {
    return this.isPassword;
  }
}
