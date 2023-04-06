import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Memory } from './memories.model';
/* import {MOCKMEMORIES} from './MOCKMEMORIES; */


@Injectable({
  providedIn: 'root',
})
export class MemoryService {
  memorySelectedEvent = new EventEmitter<Memory>();
  memoryListChangedEvent = new Subject<Memory[]>();

  private memoriesUrl = 'http://localhost:3000/memories';
  private memories: Memory[] = [];

  constructor(private http: HttpClient) {}

  //#region "CRUD"
  getMemories() {
    this.http
      .get<{ message: string; memories: Memory[] }>(this.memoriesUrl)
      .subscribe({
        next: (res) => {
          console.log(res.message);
          this.memories = res.memories;
          this.sortAndSend();
        },
        error: (err) => {
          console.error(err.message);
          console.error(err.error);
        },
      });
  }

  addMemory(newMemory: Memory) {
    if (!newMemory) return;
    newMemory.id = '';
    this.http
      .post<{ message: string; memory: Memory }>(
        this.memoriesUrl,
        newMemory,
        { headers: new HttpHeaders().set('Content-Type', 'application/json') }
      )
      .subscribe({
        next: (res) => {
          console.log(res.message);
          this.memories.push(res.memory);
          this.sortAndSend();
        },
        error: (err) => {
          console.error(err.message);
          console.error(err.error);
        },
      });
  }

  updateMemory(original: Memory, newMemory: Memory) {
    if (!newMemory || !original) return;
    const pos = this.memories.indexOf(original);
    if (pos < 0) return;

    newMemory.id = original.id;
    newMemory._id = original._id;
    this.http
      .put<{ message: string }>(
        `${this.memoriesUrl}/${original.id}`,
        newMemory,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
        }
      )
      .subscribe({
        next: (res) => {
          console.log(res.message);
          this.memories[pos] = newMemory;
          this.sortAndSend();
        },
        error: (err) => {
          console.error(err.message);
          console.error(err.error);
        },
      });
  }

  deleteMemory(memory: Memory) {
    if (!memory) return;
    const pos = this.memories.indexOf(memory);
    if (pos < 0) return;
    this.http
      .delete<{ message: string }>(`${this.memoriesUrl}/${memory.id}`)
      .subscribe({
        next: (res) => {
          console.log(res.message);
          this.memories.splice(pos, 1);
          this.sortAndSend();
        },
        error: (err) => {
          console.error(err.message);
          console.error(err.error);
        },
      });
  }
  //#endregion "CRUD"

  //#region "Helpers"
  getMemory(id: string): Memory {
    return this.memories.find((c) => c.id === id || c._id === id);
  }

  sortAndSend() {
    this.memories.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    this.memoryListChangedEvent.next(this.memories.slice());
  }
}
