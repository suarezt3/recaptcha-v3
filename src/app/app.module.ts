import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ReCaptchaService } from './re-captcha.service';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RecaptchaV3Module
    ],
    providers: [{
        provide: RECAPTCHA_V3_SITE_KEY,
        useValue: environment.recaptcha.sitekey,
    }, ],
    bootstrap: [AppComponent]
})
export class AppModule {}
