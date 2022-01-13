import { MoyenComponent } from './moyen/moyen.component';
import { AbonneComponent } from './abonne/abonne.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path : "Moyen" , component : MoyenComponent },
  {path : "Home" , component : HomeComponent},
  {path : "" , component : HomeComponent},
  {path : "Admin" , component : AdminComponent},
  {path : "Abonne", component : AbonneComponent},
  {path : "Contact", component : ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
