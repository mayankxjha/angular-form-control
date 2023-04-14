import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders: string[] = ['male', 'female']
  signUpForm: FormGroup
  suggestUsername(){
    console.log('meh')
  }
  onSubmit(){
    console.log(this.signUpForm)
  }
  constructor() { }
  ngOnInit(): void {
    this.signUpForm = new FormGroup<any>({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'gender': new FormControl('male'),
    })
  }
}
