import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AuthhService } from '../core/authh.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-subscribe-p',
  templateUrl: './subscribe-p.component.html',
  styleUrls: ['./subscribe-p.component.css']
})
export class SubscribePComponent implements OnInit {

  forma: FormGroup;
  errorMessage:string;

  constructor(  private fb: FormBuilder,private authService:AuthhService,private router:Router ) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.forma=this.fb.group({
      email:['', [Validators.required,Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })
  }
  onSubmit(){
    const email =this.forma.get('email').value;
    const password =this.forma.get('password').value;
    this.authService.createNewUser(email,password).then(
    ()=>{this.router.navigate(['login']);},
    (error)=>{
      this.errorMessage=error;
    }
    )
  }}
