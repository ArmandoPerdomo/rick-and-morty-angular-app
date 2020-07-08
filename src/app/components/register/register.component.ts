import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../core/services/user.service';
import Utils from '../../core/abstract/utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private usersService: UserService
  ) { }

  get email(){
    return this.form.get('email');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit(){
    if(this.form.invalid) return;
    const user = Object.assign(this.form.value, {uid: Utils.generateGUID()})
    this.usersService.add(user);
    this.form.reset();
    for(let control in this.form.controls) this.form.get(control).setErrors(null);
  }

}
