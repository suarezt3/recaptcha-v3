import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { UserRegistrationModel} from '../app/interfaces/userRegistration.interface'
//import { ReCaptchaService } from './re-captcha.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Angular14App';
    registerForm!: FormGroup;
    submitted = false;
    reCAPTCHAToken: string = "";
    tokenVisible: boolean = false;
    registrationInfo!: UserRegistrationModel;
    constructor(private formBuilder: FormBuilder, private recaptchaV3Service: ReCaptchaV3Service) {}
    ngOnInit() {
        this.registerForm = new FormGroup({
            UserName: new FormControl(),
            UserEmailId: new FormControl(),
            password: new FormControl(),
            confirmPassword: new FormControl(),
        })
    }
    onSubmit() {
        this.recaptchaV3Service.execute('importantAction').subscribe((token: string) => {
            this.tokenVisible = true;
            this.reCAPTCHAToken = `Token [${token}] generated`;
        });
    }
}
