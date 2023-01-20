import { Component } from '@angular/core';
import { Messages } from '../message.model';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent {
  messageList: Messages [] = [
    new Messages(2, 'Thanks', 'Welcome','Jermain'),
  ];
  constructor(){

  }
  ngOnInit(){

  }

}
