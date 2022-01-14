import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MoyenService } from '../services/moyen.service';

@Component({
  selector: 'app-moyen',
  templateUrl: './moyen.component.html',
  styleUrls: ['./moyen.component.css']
})
export class MoyenComponent implements OnInit {
moyenne:FormGroup
  constructor(private moyenService : MoyenService ,private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.moyenne = this.formBuilder.group({
      ville_depart: ['', Validators.required],
      heure_depart:['', Validators.required],
      ville_arrivee:['', Validators.required],
      heure_arrivee:['', Validators.required],



    });
  }

  addMoyen(){
    const data={}
    this.moyenService.addMoyen(this.moyenne.value).subscribe(
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
