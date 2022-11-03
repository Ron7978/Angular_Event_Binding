import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventBinding';
  #name="Rounak";
  public sam:any;
  greet(event:any){
    this.sam = event.target.innerHTML;
  }
}
