import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {
  createACForm!: FormGroup;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController
  ) {}

  ngOnInit(): void {
    this.createACForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  get getmobile() {
    return this.createACForm.get('email');
  }
  get getpassword() {
    return this.createACForm.get('password');
  }

  back() {
    this.navCtrl.back();
  }
  hideShowPassword() {
    console.log(this.passwordType);
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
  createClick() {
    console.log(this.createACForm.value);
  }
}
