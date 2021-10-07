import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { CountrySelectorComponent } from './components/country-selector/country-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    NavbarComponent,
    LoginFormComponent,
    AltaProductoComponent,
    CountrySelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase.config),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
