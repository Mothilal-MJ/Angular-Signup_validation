import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { User } from './domain/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vicky';

  userForm: FormGroup = new FormGroup({
    firstname: new FormControl(""),
    surname: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    dateofbirth: new FormControl(""),
    gender: new FormControl(""),
  })
  submitted = false;

  constructor(private formBuilder: FormBuilder){}
  ngOnInit(){
    this.userForm = this.formBuilder.group({
    firstname: ["",Validators.required],
    surname: ["",Validators.required],
    email: ["",[Validators.required,Validators.email]],
    password: ["",[Validators.required, Validators.minLength(8),Validators.maxLength(25)]],
    dateofbirth: ["",Validators.required],
    gender: ["",Validators.required],
    })
  }
  get f():{[key:string]: AbstractControl}{
    return this.userForm.controls;
  }
  yearRange(start: number, end: number): number[] {
    return Array(Math.ceil((end - start) / 1)).fill(start).map((x, y) => x + y * 1)
  }
  // user = new User();

  onSubmit(){
    this.submitted = true;
    if(this.userForm.invalid){
      return;
    }
    // this.userForm.get('gender').value;
  }
}
