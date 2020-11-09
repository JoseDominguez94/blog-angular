import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { UserI} from '../../../shared/models/user.interface'
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms'
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private route: Router) { }
    loginForm = new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),

    });
    ngOnInit(){}
  
  

     onLogin(){
      this.route.navigate(['/']);
    }
};

