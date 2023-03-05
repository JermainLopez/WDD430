import { EventEmitter, Injectable } from '@angular/core';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messageChangedEvent = new EventEmitter<Message[]>();
  private messagesUrl = 'https://jermain-project-default-rtdb.firebaseio.com/messages.json';
  private messages: Message[] = [];
  private maxMessId!: number;

  constructor(private http: HttpClient) {}

  // GET REQUEST
  getMessages(): Message[] {
    this.http.get<Message[]>(this.messagesUrl).subscribe((msgs: Message[]) => {
      this.messages = msgs;
      this.maxMessId = this.getMaxId();
      this.messages.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
      this.messageChangedEvent.next(this.messages.slice());
    });

    return this.messages.slice();
  }


  getMessage(id: string): Message {
    for (const contact of this.messages){
      if(contact.id == id){
        return contact;
      }
    }
    return null!
}

// PUT REQUEST
storeMessages() {
  this.http
    .put(this.messagesUrl, JSON.stringify(this.messages), {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    })
    .subscribe(() => {
      this.messages.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
      this.messageChangedEvent.next(this.messages.slice());
    });
}



addMessage(newMessage: Message) {
  if (newMessage === null || newMessage === undefined) return;
  this.maxMessId++;
  newMessage.id = `${this.maxMessId}`;
  this.messages.push(newMessage);
  this.storeMessages();
}


  getMaxId(): number {
    let maxId = 0;
    this.messages.forEach((m) => {
      if (+m.id > maxId) maxId = +m.id;
    });
    return maxId;
  }
}
