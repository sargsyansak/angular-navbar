import {Injectable} from '@angular/core';

@Injectable()
export class Service {
  isService = false;

  isServic() {
    return this.isService;
  }
}
