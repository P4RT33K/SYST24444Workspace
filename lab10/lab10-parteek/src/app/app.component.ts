import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'lab10-parteek';

  item = ""; // value for <input> element
items: string[] = []; // data to pass to child component
addItem() // click event handler
{
// add new item to array
// Angular will automatically update data in the child
this.items.push(this.item);
}
}
