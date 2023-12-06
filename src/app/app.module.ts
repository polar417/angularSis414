import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { provideAuth, getAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LabsComponent } from './pages/labs/labs.component';
import { HeaderComponent } from './commons/header/header.component';
import { Home2Component } from './pages/home2/home2.component';

const config = {
  apiKey: "AIzaSyC6NRJ5eQYw4-6nNRvGG2Xv-iJAmNmR6co",
  authDomain: "nnfe-e4b16.firebaseapp.com",
  databaseURL: "https://nnfe-e4b16-default-rtdb.firebaseio.com",
  projectId: "nnfe-e4b16",
  storageBucket: "nnfe-e4b16.appspot.com",
  messagingSenderId: "369285598244",
  appId: "1:369285598244:web:4951db9548241ac1311cb1",
  measurementId: "G-ZBHSKJTHRY"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    LabsComponent,
    HeaderComponent,
    Home2Component
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(config)),
    provideAuth(() => getAuth()),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
