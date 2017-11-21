import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

// install bootstrap using this : npm install bootstrap@3 jquery --save
// update angular-clis.json file's style array:
// "styles": [
//        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
//      ],
