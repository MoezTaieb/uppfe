import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../shared/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  signUpForm: FormGroup;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  
  constructor(private formBuilder: FormBuilder,private userService: UserService,private router : Router) { }
  model ={
    email :'',
    password:'',
    address:'',
    fullName: '',

  };
  ngOnInit() {
    this.initForm();
  }
    // Create reactive Form
    private initForm() {
      this.signUpForm = this.formBuilder.group({
        email: ['', [Validators.required,Validators.email]],
        fullName: ['', [Validators.required,Validators.email]],
        address: ['', [Validators.required,Validators.email]],
        password: ['',[Validators.required , Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
      })
    }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.userService.postUser(this.signUpForm.value).subscribe(
      res => {
        
        console.log(res)
        this.router.navigateByUrl('/login');
        
      },
      err => {
        console.log(err)
        this.serverErrorMessages = err.error.message;
      }
    )
  }
  // resetForm(form: NgForm) {
  //   this.userService.selectedUser = {
  //     fullName: '',
  //     email: '',
  //     password: '',
  //     address:''
  //   };
  //   form.resetForm();
  //   this.serverErrorMessages = '';
  // }
}
