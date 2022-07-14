import { Component } from '@angular/core';

// constant: conversion factor from lb to kg
const FACT = 0.45359237;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab09-parteek';

  lb = 1; // public property
  kg = Math.round(this.lb * FACT * 100) / 100; // public property

  convertToKg(){
    this.kg = Math.round(this.lb * FACT * 100) / 100;
  }
  convertToLb(){
    this.lb = Math.round(this.kg / FACT * 100) / 100;
  }
}
