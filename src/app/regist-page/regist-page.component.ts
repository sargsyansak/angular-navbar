import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegistrService} from '../registr.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Service} from '../service';

@Component({
  selector: 'app-regist-page',
  templateUrl: './regist-page.component.html',
  styleUrls: ['./regist-page.component.css']
})
export class RegistPageComponent implements OnInit {

  form: FormGroup;
  isName: boolean;


  boolPass = false;
  boolRepeatPass = false;
  isPassword = true;

  userName = '';
  userSurname = '';

  constructor(
    private registService: RegistrService,
    private router: Router,
    private  route: ActivatedRoute,
    private isServiceRegist: Service
  ) {
  }

  public saveRegistration() {
    this.registService.registrationData = this.form.value;
    if (this.boolPass === false && this.boolRepeatPass === false) {
      this.registService.isPassword = true;
    }
    this.registService.registrationData = this.form.value;
    if (this.form.status === 'VALID' && !this.isName && this.registService.isPassword) {
      this.isServiceRegist.isService = true;
      this.router.navigate(['/commentPage'], {relativeTo: this.route});
    } else {
      this.isServiceRegist.isService = false;
      this.router.navigate(['/'], {relativeTo: this.route});
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      surname: new FormControl(),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl()
    });
    this.form.setValue({
      name: this.registService.registrationData.name ? this.registService.registrationData.name : '',
      surname: this.registService.registrationData.surname ? this.registService.registrationData.surname : '',
      email: this.registService.registrationData.email ? this.registService.registrationData.email : '',
      phone: this.registService.registrationData.phone ? this.registService.registrationData.phone : ''
    });
  }

  checkForPass(passStatus, isStatus, type) {
    this[type] = passStatus;
    if (passStatus.length < 6) {
      this[isStatus] = isStatus;
    } else {
      this[isStatus] = false;
    }
  }
}


