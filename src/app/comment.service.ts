import {Injectable} from '@angular/core';

@Injectable()
export class CommentService {
  commentData = {
      text: null,
      card: null
    };

  isComment = false;

  isComm() {
    return this.isComment;
  }
}
