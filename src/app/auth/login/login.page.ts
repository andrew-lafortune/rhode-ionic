import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  get getmobile() {
    return this.loginForm.get('email');
  }
  get getpassword() {
    return this.loginForm.get('password');
  }

  back() {
    this.navCtrl.back();
  }
  hideShowPassword() {
    console.log(this.passwordType);
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
  signinClick() {
    console.log(this.loginForm.value);
    this.navCtrl.navigateForward(['/pages/project-code']);
  }
}
