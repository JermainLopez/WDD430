import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PeopleMessage } from '../people.model';
import { MessageService } from '../people.service';


@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html',
  styleUrls: ['./people-edit.component.css']
})
export class PeopleEditComponent implements OnInit {
  @ViewChild('subject') subject: ElementRef;
  @ViewChild('msgText') msgText: ElementRef;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  onSendMessage() {
    const subject = this.subject.nativeElement.value;
    const msgText = this.msgText.nativeElement.value;
    const message = new PeopleMessage(subject, msgText, '637d524459c74238f49c3f50');
    this.messageService.addMessage(message);
  }

  onClear() {
    this.subject.nativeElement.value = '';
    this.msgText.nativeElement.value = '';
  }
}
