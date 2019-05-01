import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form1: FormGroup;
  errorMessage:string;

  constructor(  private fb: FormBuilder,private authService:AuthService,private router:Router ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.form1=this.fb.group({
      email:['', [Validators.required,Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })
  }
  onSubmit(){
    const email =this.form1.get('email').value;
    const password =this.form1.get('password').value;
    this.authService.signInUser(email,password).then(
    ()=>{this.router.navigate(['/profile']);},
    (error)=>{
      this.errorMessage=error;
    }
    )
  }

}
