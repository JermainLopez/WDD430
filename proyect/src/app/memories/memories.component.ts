import { Component, OnInit } from '@angular/core';
import { Memory } from './memories.model';
import { MemoryService } from './memories.service';


@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.css']
})
export class MemoriesComponent  implements OnInit {
  selectedMemory: Memory;

  constructor(private memoryService: MemoryService) {}

  ngOnInit(): void {
    this.memoryService.memorySelectedEvent.subscribe((memory: Memory) => {
      this.selectedMemory = memory;
    });
  }
}
