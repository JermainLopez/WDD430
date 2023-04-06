import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PeopleMessage } from './people.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messageChangedEvent = new EventEmitter<PeopleMessage[]>();

  private messagesUrl = 'http://localhost:3000/messages';
  private messages: PeopleMessage[] = [];

  constructor(private http: HttpClient) {}

  getMessages() {
    this.http
      .get<{ message: string; messageObjs: PeopleMessage[] }>(this.messagesUrl)
      .subscribe({
        next: (res) => {
          console.log(res.message);
          console.log(res.messageObjs);
          this.messages = res.messageObjs;
          this.sortAndSend();
        },
        error: (err) => {
          console.error(err.message);
          console.error(err.error);
        },
      });
  }

  addMessage(newMsg: PeopleMessage) {
    if (!newMsg) return;
    newMsg.id = '';
    this.http
      .post<{ message: string; messageObj: PeopleMessage }>(
        this.messagesUrl,
        newMsg,
        { headers: new HttpHeaders().set('Content-Type', 'application/json') }
      )
      .subscribe({
        next: (res) => {
          console.log(res.message);
          this.messages.push(res.messageObj);
          this.sortAndSend();
        },
        error: (err) => {
          console.error(err.message);
          console.error(err.error);
        },
      });
  }

  getMessage(id: string): PeopleMessage {
    return this.messages.find((m) => m.id === id);
  }

  sortAndSend() {
    this.messages.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    this.messageChangedEvent.next(this.messages.slice());
  }
}
