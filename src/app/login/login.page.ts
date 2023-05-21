import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
//import * as jwt from 'jsonwebtoken';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  /*
  const secretKey = 'YOUR_SECRET_KEY';
const payload = { userId: '123', username: 'john.doe' };
const options = { expiresIn: '1h' };

const token = jwt.sign(payload, secretKey, options);
*/
  
  password = "";
  error =" ";

  username ="";

  constructor(private router: Router) {}

  login() {
    // Vérification des informations de connexion (exemple simple)
    if (this.username === 'admin' && this.password === 'password') {
      // Connexion réussie, redirection vers la page d'accueil
      
         // Génération du token JWT
         const secretKey = 'YOUR_SECRET_KEY';
         const payload = { username: this.username };
         const options = { expiresIn: '1h' };
   
        // const token = jwt.sign(payload, secretKey, options);
   
         // Stockage du token dans le stockage local
      // localStorage.setItem('token', token);
      this.router.navigate(['/home']);
    } else { 
      // Informations de connexion incorrectes
      this.error = 'Nom d\'utilisateur ou mot de passe incorrect.';
    }
  }


  favoriteColorControl = new FormControl('');

  navigate(){
    this.router.navigate(['/detail'])
  }

  connexion(){
    
    this.router.navigate(['home'])
  }

  ngOnInit() {
  }

}
