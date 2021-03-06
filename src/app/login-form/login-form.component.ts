import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router, private userService: UserService) { }

  ngOnInit() {
  }

 loginUser(e) {
  	e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;
  	
  	if(username == 'admin' && password == 'admin') {
      this.userService.setUserLoggedIn();
  		this.router.navigate(['dashboard']);
  	}
  }
}

// npm install bootstrap@3 jquery --save

// add below in angular-cli.json file under styles
// "../node_modules/bootstrap/dist/css/bootstrap.min.css"

// add below in angular-cli.json file under styles
// "../node_modules/jquery/dist/jquery.js",
