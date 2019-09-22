import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { CreationService } from '../services/creation.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  signUpForm: any;
  formBuilder: any;

  constructor(private tokenservice: CreationService) { }
  
  name :string
  symbol :string
  granularity :number
  controllers:string
  certificateSigners:string
  partitions:string
  ngOnInit() {
    this.initForm();
  }
    // Create reactive Form
    private initForm() {
      this.signUpForm = this.formBuilder.group({
        name: ['', [Validators.required,Validators.name]],
        symbol: ['', [Validators.required,Validators.symbol]],
        granularity: ['', [Validators.required,Validators.granularity]],
        controllers: ['',[Validators.required , Validators.controllers]],
        certificateSigners: ['', [Validators.required,Validators.certificateSigners]],
        partitions:['', [Validators.required,Validators.partitions]]
      })
    
  }

  onSubmit(form: NgForm){
      console.log("form " + JSON.stringify(form.value));
      this.tokenservice.createtoken(form.value).subscribe( 
        res => {
            console.log("resultat : " +res);
        },
        err => {
          console.log("erreur : " +err);
        }
      )
  }

}
