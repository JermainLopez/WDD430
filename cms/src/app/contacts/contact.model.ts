import { Component } from '@angular/core';
export class Contact {
  public name: string;
  public email: string;
  public imageUrl: string;
  constructor(
    id: number,
    name: string,
    email: string,
    phonne: number,
    imageUrl: string,
    group: string){
      this.name = name;
      this.email= email;
      this.imageUrl = imageUrl;

  }
}
