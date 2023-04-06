import { Component, Input, OnInit } from '@angular/core';
import { PeopleMessage } from '../people.model';
import { MemoryService } from 'src/app/memories/memories.service';


@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.css']
})
export class PeopleItemComponent implements OnInit {
  @Input() message: PeopleMessage;
  messageSender: string;

  constructor(private memoryService: MemoryService) {}

  ngOnInit(): void {
    this.messageSender = this.memoryService.getMemory(
      this.message.sender
    )?.name;
  }
}
