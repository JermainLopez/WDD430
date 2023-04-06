import { Component, Input, OnInit } from '@angular/core';
import { Memory } from '../memories.model';

@Component({
  selector: 'app-memories-item',
  templateUrl: './memories-item.component.html',
  styleUrls: ['./memories-item.component.css']
})
export class MemoriesItemComponent implements OnInit {
  @Input() memory: Memory;

  constructor() {}

  ngOnInit(): void {}
}
