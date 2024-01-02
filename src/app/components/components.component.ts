import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
}
