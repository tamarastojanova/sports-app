import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './bmi/bmi.component';
import { ContactComponent } from './contact/contact.component';
import { CrewComponent } from './crew/crew.component';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { OptionsComponent } from './options/options.component';
import { PricesAndMembershipsComponent } from './prices-and-memberships/prices-and-memberships.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { ProgramsComponent } from './programs/programs.component';

const routes: Routes = 
[
  {path: 'pricesandmemberships', component: PricesAndMembershipsComponent}, 
{path:'trainings', component: TrainingsComponent},
{
  path: '',
  redirectTo: 'home', 
  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TrainingsComponent, PricesAndMembershipsComponent, HomeComponent,
   OptionsComponent,BmiComponent,CrewComponent,LocationsComponent, ContactComponent, ProgramsComponent]; 