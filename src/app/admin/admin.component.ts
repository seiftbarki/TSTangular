import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MoyenService } from '../services/moyen.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private moyenService : MoyenService ,private formBuilder : FormBuilder) { }

  ngOnInit(): void {

  }

  addMoyen(){
    const data={}
    this.moyenService.addMoyen(data).subscribe(
      (data)=>{
        console.log(data);
        console.log("moyenne a ete cree avec succes");
      },
      (error)=>{
        console.log(error);

      }

    )
  }
}
