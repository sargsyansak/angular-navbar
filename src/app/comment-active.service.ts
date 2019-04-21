import {CanActivate} from '@angular/router';
import {CommentService} from './comment.service';
import {Service} from './service';
import {ServiceComment} from './servicecomment';
import {Injectable} from '@angular/core';

@Injectable()
export class CommentActiveService implements CanActivate {
  constructor(private comments: ServiceComment) {
  }

  canActivate(): boolean {
    return this.comments.isComServic();
  }
}
