import {Component, OnInit} from '@angular/core';
import {RegistPageComponent} from '../regist-page/regist-page.component';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.css']
})
export class MessagePageComponent implements OnInit {

  userName = '';
  userSurname = '';

  constructor(private reg: RegistPageComponent) {
  }

  ngOnInit() {
  }

}
