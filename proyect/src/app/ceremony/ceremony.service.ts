import { EventEmitter, Injectable } from '@angular/core';
import { Ceremony } from './ceremony.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CeremonyService {
  selectedCeremonyEvent = new EventEmitter<Ceremony>();
  ceremonyListChangedEvent = new Subject<Ceremony[]>();

  private ceremoniesUrl = 'https://jermain-project-default-rtdb.firebaseio.com/ceremonies.json';
  private ceremonies: Ceremony[] = [];
  private maxDocId!: number;

  constructor(private http: HttpClient) {}

  /*GET REQUEST*/
  getCeremonies(): Ceremony[] {
    this.http
      .get<Ceremony[]>(this.ceremoniesUrl)
      .subscribe((docs: Ceremony[]) => {
        this.ceremonies = docs;
        this.maxDocId = this.getMaxId();
        this.ceremonies.sort((a, b) => {
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });
        this.ceremonyListChangedEvent.next(this.ceremonies.slice());
      });

    return this.ceremonies.slice();
  }

   getCeremony(id: string): Ceremony {
    for (const ceremony of this.ceremonies){
      if(ceremony.id == id){
        return ceremony;
      }
    }
    return null!
  }

  /* PUT REQUEST*/
  storeCeremonies() {
    this.http
      .put(this.ceremoniesUrl, JSON.stringify(this.ceremonies), {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      })
      .subscribe(() => {
        this.ceremonies.sort((a, b) => {
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });
        this.ceremonyListChangedEvent.next(this.ceremonies.slice());
      });
  }

  deleteCeremony(ceremony: Ceremony) {
    if (!ceremony) return;
    const pos = this.ceremonies.indexOf(ceremony);
    if (pos < 0) return;
    this.ceremonies.splice(pos, 1);
    this.storeCeremonies();
  }

  getMaxId(): number {
    let maxIdNumber = 0;
    this.ceremonies.forEach((ceremony) => {
      if (+ceremony.id > maxIdNumber) maxIdNumber = +ceremony.id;
    });
    return maxIdNumber;
  }

  addCeremony(newDoc: Ceremony) {
    if (newDoc === null || newDoc === undefined) return;
    this.maxDocId++;
    newDoc.id = `${this.maxDocId}`;
    this.ceremonies.push(newDoc);
    this.storeCeremonies();
  }

  updateCeremony(original: Ceremony, newCeremony: Ceremony) {
    if (
      newCeremony === null ||
      newCeremony === undefined ||
      original === null ||
      original === undefined
    ) {
      return;
    }
    const pos = this.ceremonies.indexOf(original);
    if (pos < 0) return;

    newCeremony.id = original.id;
    this.ceremonies[pos] = newCeremony;
    this.storeCeremonies();
  }
}
