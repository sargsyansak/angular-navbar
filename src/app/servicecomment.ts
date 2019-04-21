import {Injectable} from '@angular/core';

@Injectable()
export class ServiceComment {
  isCommentService = false;

  isComServic() {
    return this.isCommentService;
  }
}
