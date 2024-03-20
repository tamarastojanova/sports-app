import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents  } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { OptionsComponent } from './options/options.component';
import { BmiComponent } from './bmi/bmi.component';
import { RouterModule } from '@angular/router';
import { CrewComponent } from './crew/crew.component';
import { ContactComponent } from './contact/contact.component';
import { PricesAndMembershipsComponent } from './prices-and-memberships/prices-and-memberships.component';
import { LocationsComponent } from './locations/locations.component';
import { HomeComponent } from './home/home.component';
import { ProgramsComponent } from './programs/programs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';

import { AngularFireModule } from '@angular/fire/compat';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideStorage,getStorage } from '@angular/fire/storage';

const firebaseConfig= {
  apiKey: "AIzaSyB88jyCgkbNIhUdtCbW9TE1F5oscHVtuV8",
  authDomain: "sports-app-5a0fc.firebaseapp.com",
  databaseURL: "https://sports-app-5a0fc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sports-app-5a0fc",
  storageBucket: "sports-app-5a0fc.appspot.com",
  messagingSenderId: "290743104191",
  appId: "1:290743104191:web:54b7a2489bcbea2aa5cc0a"
};

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    OptionsComponent,
    BmiComponent,
    CrewComponent,
    ContactComponent,
    LocationsComponent,
    HomeComponent,
    ProgramsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'trainings', component: TrainingsComponent},
      {path: 'options', component: OptionsComponent},
      {path: 'bmi', component: BmiComponent},
      {path: 'crew', component: CrewComponent},
      {path: 'pricesandmemberships', component: PricesAndMembershipsComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'home', component: HomeComponent},
      {path: 'locations', component: LocationsComponent},    
      {path: 'programs', component: ProgramsComponent}
    ]),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    AngularFireModule.initializeApp(firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
