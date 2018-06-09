import { Component } from '@angular/core';

declare var $:any;


@Component({
  selector: 'angular',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  constructor(){

    $(document).ready(function(){
      $('.your-class').slick({
        "setting-name": "setting-value"
      });
    });

  }
}
