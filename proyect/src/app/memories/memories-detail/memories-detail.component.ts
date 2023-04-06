import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Memory } from '../memories.model';
import { MemoryService } from '../memories.service';


@Component({
  selector: 'app-memories-detail',
  templateUrl: './memories-detail.component.html',
  styleUrls: ['./memories-detail.component.css']
})
export class MemoriesDetailComponent implements OnInit {
  memory: Memory;

  constructor(
    private memoryService: MemoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.memory = this.memoryService.getMemory(params['id']);
    });
  }

  onDelete() {
    this.memoryService.deleteMemory(this.memory);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
