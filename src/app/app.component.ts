import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
display : boolean;
type : string;
s : string;
loginF:FormGroup
abonne:FormGroup
admin:FormGroup


  constructor(private userService : UserService ,private router: Router,private formBuilder : FormBuilder) {
    this.display=true;
this.s="/Abonne";
this.type= "";
   }

  ngOnInit(): void {
    
    this.loginF = this.formBuilder.group({
      email: ['', Validators.required],
      password:['', Validators.required],
    });
    this.admin = this.formBuilder.group({
      name: ['', Validators.required],
      cin:['', Validators.required],
      email: ['', Validators.required],
      telephone:['', Validators.required],

    });
    this.abonne = this.formBuilder.group({
      password: ['', Validators.required],
      confirm_password:['', Validators.required],


    });

  }

  login(){
    this.display =false;
    const data={
      email: '',
      password:''
    }
    this.userService.login(data).subscribe(
      (data)=>{
        console.log("user logged in");
        this.router.navigate(['/admin']);
      },
      (error)=>{
        console.log(error);
        alert(error)

      }
    )
  }


  inscription(){
    const data={
      email: '',
      password:''
    }
    this.userService.inscription(data).subscribe(
      (data)=>{
        console.log("user created");
        console.log(data);

      },
      (error)=>{
        console.log(error);
        alert(error);

      }
    )
  }

  change(i : HTMLSelectElement){
    if(i.value ="admin")
      this.s="/Admin";

  }
  reloadCurrentPage() {
    window.location.reload();
   }
   typea(a : string){
     this.type=a;
      this.s = a;
   }
}
