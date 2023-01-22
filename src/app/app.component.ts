import {Component, ViewChild} from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultOption = 'pet';
  answer = '';
  genders = ['Male', 'Female']
  @ViewChild('f') formElement: NgForm;
  @ViewChild('email') emailElement: NgModel;
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  }
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.formElement.form.patchValue({
      userData: {
        username: suggestedName,
      }
    })
  }

  // onSubmit(form: NgForm){
  //   console.dir(form);
  // }
  onSubmit() {
    console.log(this.emailElement);
    console.log(this.formElement);
    this.submitted = true;
    this.user.username = this.formElement.value.userData.username;
    this.user.email = this.formElement.value.userData.email;
    this.user.secretQuestion = this.formElement.value.secret;
    this.user.answer = this.formElement.value.answer;
    this.user.gender = this.formElement.value.gender;
  }
}
