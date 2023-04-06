import { EventEmitter, Injectable } from '@angular/core';
import { Ceremony } from './ceremonies.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CeremoniesService {
  ceremonySelectedEvent = new EventEmitter<Ceremony>();
  ceremonyListChangedEvent = new Subject<Ceremony[]>();

  private ceremoniesUrl = 'http://localhost:3000/ceremonies';
  private ceremonies: Ceremony[] = [];

  constructor(private http: HttpClient) {}

  //#region "CRUD"
  getCeremonies() {
    this.http
      .get<{ message: string; ceremonies: Ceremony[] }>(this.ceremoniesUrl)
      .subscribe({
        next: (res) => {
          console.log(res.message);
          this.ceremonies = res.ceremonies;
          this.sortAndSend();
        },
        error: (err) => {
          console.error(err.message);
          console.error(err.error);
        },
      });
  }

  addCeremony(newCeremony: Ceremony) {
    if (!newCeremony) return;
    newCeremony.id = '';
    this.http
      .post<{ message: string; ceremony: Ceremony }>(
        this.ceremoniesUrl,
        newCeremony,
        { headers: new HttpHeaders().set('Content-Type', 'application/json') }
      )
      .subscribe({
        next: (res) => {
          console.log(res.message);
          this.ceremonies.push(res.ceremony);
          this.sortAndSend();
        },
        error: (err) => {
          console.error(err.message);
          console.error(err.error);
        },
      });
  }

  updateCeremony(original: Ceremony, newCeremony: Ceremony) {
    if (!newCeremony || !original) return;
    const pos = this.ceremonies.indexOf(original);
    if (pos < 0) return;

    newCeremony.id = original.id;
    newCeremony._id = original._id;
    this.http
      .put<{ message: string }>(
        `${this.ceremoniesUrl}/${original.id}`,
        newCeremony,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
        }
      )
      .subscribe({
        next: (res) => {
          console.log(res.message);
          this.ceremonies[pos] = newCeremony;
          this.sortAndSend();
        },
        error: (err) => {
          console.error(err.message);
          console.error(err.error);
        },
      });
  }

  deleteCeremony(ceremony: Ceremony) {
    if (!ceremony) return;
    const pos = this.ceremonies.indexOf(ceremony);
    if (pos < 0) return;
    this.http
      .delete<{ message: string }>(`${this.ceremoniesUrl}/${ceremony.id}`)
      .subscribe({
        next: (res) => {
          console.log(res.message);
          this.ceremonies.splice(pos, 1);
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
  getCeremony(id: string): Ceremony {
    return this.ceremonies.find((c) => c.id === id || c._id === id);
  }

  sortAndSend() {
    this.ceremonies.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    this.ceremonyListChangedEvent.next(this.ceremonies.slice());
  }
}
