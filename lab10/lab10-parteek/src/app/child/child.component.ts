// child component
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{

  constructor() { }

  ngOnInit(): void {
  }

  @Input() list: string[] = []; // input data from parent comp

}
