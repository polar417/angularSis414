import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  email:string = "";
  pass:string = "";

  nombre1:string = "";
  apellido:string ="";

  constructor(private authService: AuthService, private router: Router){}

  guardar(){
    this.authService.register(this.email, this.pass, this.nombre1, this.apellido).then(res =>{
      this.router.navigate(["/"]);
    }).catch(error => {
      console.log(Error)
    })
  }
  
}
