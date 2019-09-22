import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  address:string;
  signinForm: FormGroup;
   errorMessage: string;
   isAuth=false ;

    constructor(private formBuilder: FormBuilder,private userService: UserService,private router : Router) { }
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    serverErrorMessages: string;
   ngOnInit() {
     // init Reactive Form
     this.initForm();
    
   }

   // Create reactive Form
   private initForm() {
     this.signinForm = this.formBuilder.group({
       email: ['', [Validators.required,Validators.email]],
       password: ['',[Validators.required , Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
     })
   }
   // Fonction submit Form : get email & password if valide & call signin function from authService
   onSubmit(){
    console.log(this.signinForm.value)
    this.userService.login(this.signinForm.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        console.log(res)
        this.router.navigateByUrl('/');
        console.log("connected")
        location.reload()
      },
      err => {
    
        this.serverErrorMessages = err.error.message;
      }
    );

   }

}
