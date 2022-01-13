import { Component } from '@angular/core';

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
  constructor(){
this.display=true;
this.s="/Abonne";
this.type= "";
  }
  login(){
    this.display =false;
    
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
