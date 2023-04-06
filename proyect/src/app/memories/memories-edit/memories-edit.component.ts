import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Memory } from '../memories.model';
import { MemoryService } from '../memories.service';


@Component({
  selector: 'app-memories-edit',
  templateUrl: './memories-edit.component.html',
  styleUrls: ['./memories-edit.component.css']
})
export class MemoriesEditComponent  implements OnInit {
  originalMemory: Memory;
  memory: Memory;
  groupMemories: Memory[] = [];
  editMode: boolean = false;
  id: string;

  constructor(
    private memoryService: MemoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      if (this.id === undefined || this.id === null) {
        this.editMode = false;
        return;
      }
      this.originalMemory = this.memoryService.getMemory(this.id);
      if (this.originalMemory === undefined || this.originalMemory === null) {
        return;
      }
      this.editMode = true;
      this.memory = JSON.parse(JSON.stringify(this.originalMemory));
      if (this.originalMemory.group !== null) {
        this.groupMemories = this.memory.group;
      }
    });
  }

  onSubmit(form: NgForm) {
    let value = form.value;
    let newMemory= new Memory(
      value.name,
      value.description,
      value.phone,
      value.imageUrl,
      this.groupMemories
    );
    if (this.editMode) {
      this.memoryService.updateMemory(this.originalMemory, newMemory);
    } else {
      this.memoryService.addMemory(newMemory);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  /* DRAG AND DROP METHODS */
  addToGroup($event: any) {
    const selectedMemory: Memory = $event.dragData;
    if (this.isInvalidMemory(selectedMemory)) return;
    this.groupMemories.push(selectedMemory);
  }

  isInvalidMemory(newMemory: Memory) {
    if (!newMemory) return true;
    if (this.memory && newMemory.id === this.memory.id) return true;
    return this.groupMemories.some((c) => newMemory.id === c.id);
  }

  onRemoveItem(index: number) {
    if (index < 0 || index >= this.groupMemories.length) return;
    this.groupMemories.splice(index, 1);
  }
}
