import { Component } from '@angular/core';
	
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from '../_helpers/customValidator';

import { SignupserviceService } from '../signupservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private signupService:SignupserviceService, 
    private router:Router) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phonenumber: ['', Validators.required],
      userCategory: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]
    ,

    CustomValidators.mustMatch('password', 'confirmPassword')
  ]
})
  }
  // onSubmit() {
  //   this.submitted = true;

  //   // stop the process here if form is invalid
  //   if (this.registerForm.invalid) {
  //     return;
  //   }

  //   alert('registration succesfull');
  // }

  signUp()
  {
    console.log("Service Called");  
    
    const firstName = this.registerForm.controls['firstName'].value;
    const lastName:String = this.registerForm.controls['lastName'].value;
    const phonenumber:Number = this.registerForm.controls['phonenumber'].value;
    const userCategory:String = this.registerForm.controls['userCategory'].value;
    const email:String = this.registerForm.controls['email'].value;
    const password:String = this.registerForm.controls['password'].value;
    
    
  
    this.signupService.signUp({firstName,lastName,phonenumber,userCategory,email,password})
    .subscribe((data) => {
      console.log("signup subscribe");
      alert(firstName.value);
      
      let status= data.status;
      console.log("status="+status);
      
      if(!status)
      {
        alert("User already exists");
        this.router.navigate(["/signup"]);
      }
      else{
        this.router.navigate(["/login"]);
      }
      
      })
  }
}