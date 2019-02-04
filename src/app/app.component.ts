import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Marcenaria Venusiana';
  portfolio = 'href="https://www.instagram.com/marcenaria_venusiana/';

  ngOnInit(){
  console.log("Veja nosso portfólio: " + this.portfolio);
  }
}

