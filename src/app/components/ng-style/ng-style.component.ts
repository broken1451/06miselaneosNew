import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.scss'
})
export class NgStyleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  public tamano: number = 40;

  constructor() { 
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  aumenta() {
    // this.tamano += 5;
    this.tamano = this.tamano + 5;
  }

  disminuye() {
    // this.tamano-= 5;
    this.tamano = this.tamano - 5;
  }

  ngAfterContentChecked(): void {
    // Implementación del método ngAfterContentChecked
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    // Implementación del método ngAfterContentInit
    console.log('ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    // Implementación del método ngAfterViewChecked
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    // Implementación del método ngAfterViewInit
    console.log('ngAfterViewInit');
  }

  ngDoCheck(): void {
    // Implementación del método ngDoCheck
    console.log('ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Implementación del método ngOnChanges
    console.log('ngOnChanges');
  }

  ngOnDestroy(): void {
    // Implementación del método ngOnDestroy
    console.log('ngOnDestroy');
  }

}
