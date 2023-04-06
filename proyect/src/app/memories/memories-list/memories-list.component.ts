import { Component, OnDestroy, OnInit } from '@angular/core';
import { Memory } from '../memories.model';
import { Subscription } from 'rxjs';
import { MemoryService } from '../memories.service';


@Component({
  selector: 'app-memories-list',
  templateUrl: './memories-list.component.html',
  styleUrls: ['./memories-list.component.css']
})
export class MemoriesListComponent implements OnInit, OnDestroy {
  memories: Memory[] = [];
  subscription: Subscription;
  term: string = '';

  constructor(private memoryService: MemoryService) {}

  ngOnInit(): void {
    this.memoryService.getMemories();
    this.subscription = this.memoryService.memoryListChangedEvent.subscribe(
      (memories: Memory[]) => {
        this.memories = memories;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  search(value: string) {
    this.term = value;
  }
}
