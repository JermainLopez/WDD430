import { Component, OnInit } from '@angular/core';
import { PeopleMessage } from '../people.model';
import { MessageService } from '../people.service';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent  implements OnInit {
  messages: PeopleMessage[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getMessages();
    this.messageService.messageChangedEvent.subscribe((messages: PeopleMessage[]) => {
      this.messages = messages;
    });
  }

  onAddMessage(message: PeopleMessage) {
    this.messages.push(message);
  }
}
