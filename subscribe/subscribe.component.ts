import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  form: FormGroup;
  errorMessage:string;

  constructor(  private fb: FormBuilder,private authService:AuthService,private router:Router ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.form=this.fb.group({
      email:['', [Validators.required,Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })
  }
  onSubmit(){
    const email =this.form.get('email').value;
    const password =this.form.get('password').value;
    this.authService.createNewUser(email,password).then(
    ()=>{this.router.navigate(['']);},
    (error)=>{
      this.errorMessage=error;
    }
    )
  }}