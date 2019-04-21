import {Component, OnInit} from '@angular/core';
import {CommentService} from '../comment.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceComment} from '../servicecomment';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.css']
})
export class CommentPageComponent implements OnInit {

  commentForm: FormGroup;
  boolComment = false;
  boolComment2 = false;
  isComment: boolean;

  constructor(
    private  commentService: CommentService,
    private router: Router,
    private  rout: ActivatedRoute,
    private comm: ServiceComment) {
  }

  ngOnInit() {
    this.commentForm = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.minLength(1)]),
      card: new FormControl('', [Validators.required, Validators.minLength(9)])
    });
    this.commentForm.setValue({
      text: this.commentService.commentData.text ? this.commentService.commentData.text : '',
      card: this.commentService.commentData.text ? this.commentService.commentData.text : ''
    });
  }

  public saveComment() {
    this.commentService.commentData = this.commentForm.value;
    this.commentService.isComment = true;
    if (this.commentForm.status === 'VALID') {
      this.comm.isCommentService = true;
      this.router.navigate(['/messagePage'], {relativeTo: this.rout});
    } else {
      this.comm.isCommentService = false;
      this.router.navigate(['/commentPage'], {relativeTo: this.rout});

    }
  }
}
