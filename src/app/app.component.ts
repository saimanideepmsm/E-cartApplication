import { Component } from '@angular/core'; 
import {MatDialog} from '@angular/material/dialog';
import { PopupComponent } from './components/popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoping_frontend';
  constructor(private dialog:MatDialog)
  {

  }
  pop()
  {
    this.dialog.open(PopupComponent);
  }
}
