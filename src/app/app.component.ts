import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  public festivals;
  public nbModif = 0;
  public nomFirstFestival;

  ngOnInit ( ) : void {
    this.festivals = [
      { name : " FJM2020 " , tables: 160 },
      { name : " FJM2018 " , tables: 80 },
      { name : " FJM2019 " , tables: 110 }
    ]
    this.nomFirstFestival = this.festivals[0].name;
  }

  add() {
    this.festivals.push({name: "FJM2021", tables: 300})
  }

  modif() {
    this.nbModif++;
    this.festivals[0].name = this.nomFirstFestival + " " + this.nbModif
  }

}
